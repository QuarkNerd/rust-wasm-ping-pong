#[macro_use] mod utils;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
#[repr(u8)]
pub enum GameState {
    InProgress   = 0,
    GameOver     = 1,
}

#[wasm_bindgen]
pub struct Universe {
    height: u16,
    width: u16,
    paddle_height: u16,
    paddle_x_pos: u16,
    ball_size: u16,
    ball_pos: Vec<f64>,
    ball_vel: Vec<f64>,
    paddles_y_pos: Vec<f64>,
    paddle_vel: f64,
    ball_x_vel: f64,
    ball_max_y_vel: f64,
    score: Vec<u8>,
    max_score: u8,
    game_state: Vec<GameState>,
} 

#[wasm_bindgen]
impl Universe {
    pub fn new(height: u16, width: u16, paddle_height:u16, paddle_width: u16, paddle_x_offset: u16, ball_size:u16, paddle_vel: f64, ball_x_vel: f64, ball_max_y_vel: f64, max_score: u8) -> Universe {
        
        Universe {
            height,
            width,
            paddle_height,
            paddle_x_pos: paddle_width + paddle_x_offset,
            ball_size,
            ball_pos: vec!((height/2) as f64, (width/2) as f64),
            ball_vel: vec!(ball_max_y_vel*js_sys::Math::random(), (if js_sys::Math::random() < 0.5 { 1.0 } else { -1.0 })*ball_x_vel),
            paddles_y_pos: vec!((height/2) as f64, (height/2) as f64),
            paddle_vel,
            ball_x_vel,
            ball_max_y_vel,
            score: vec!(0, 0),
            max_score,
            game_state: vec!(GameState::InProgress),
        }
    }

    pub fn tick(&mut self) {
        self.ball_pos[0] += self.ball_vel[0];
        self.ball_pos[1] += self.ball_vel[1];

        let ball_x = self.ball_pos[1];
        let ball_y = self.ball_pos[0];

        let ball_paddle_0_y_diff = ball_y - self.paddles_y_pos[0];
        let ball_paddle_1_y_diff = ball_y - self.paddles_y_pos[1];

        if ball_y < 0.0 || ball_y > (self.height as f64) {
            self.ball_vel[0] = self.ball_vel[0]*-1.0;
        }

        let mut y_diff_ratio: Option<f64> = None; 
        let mut is_ball_behind_paddle_0 = false;
        if ball_x < self.paddle_x_pos as f64 {
            y_diff_ratio = Some(ball_paddle_0_y_diff / (self.paddle_height/2) as f64);
            is_ball_behind_paddle_0 = true;
        } 
        else if ball_x > (self.width - self.paddle_x_pos) as f64
        {
             y_diff_ratio = Some(ball_paddle_1_y_diff / (self.paddle_height/2) as f64)
        };
        
        if let Some(r) = y_diff_ratio {
            if r.abs() < 1.0 {
                self.ball_vel[1] = self.ball_vel[1]*-1.0;
                self.ball_vel[0] = (self.ball_max_y_vel*r.abs().sqrt()).copysign(r);
            }
            else {
                self.ball_vel = vec!(self.ball_max_y_vel*js_sys::Math::random(), (if js_sys::Math::random() < 0.5 { 1.0 } else { -1.0 })*self.ball_x_vel);
                // can't create new vec because JS needs pointer
                self.ball_pos[0] = (self.height/2) as f64; 
                self.ball_pos[1] = (self.width/2) as f64;
                
                if is_ball_behind_paddle_0 {
                    self.score[1] += 1;
                } else {
                    self.score[0] += 1;
                }
                if self.score[1] == self.max_score || self.score[0] == self.max_score{
                        self.ball_vel = vec!(0.0, 0.0);
                        self.game_state[0] = GameState::GameOver;
                    }
            }
        }

    }

    pub fn ball_pos(&self) -> *const f64 {
        self.ball_pos.as_ptr()
    }

    pub fn paddles_y_pos(&self) -> *const f64 {
        self.paddles_y_pos.as_ptr()
    }

    pub fn score(&self) -> *const u8 {
        self.score.as_ptr()
    }

    pub fn game_state(&self) -> *const GameState {
        self.game_state.as_ptr()
    }

    pub fn key_pressed(&mut self, a:&str) {
        match a {
            "w" => self.paddles_y_pos[0] -= self.paddle_vel,
            "s" => self.paddles_y_pos[0] += self.paddle_vel,
            "ArrowUp" => self.paddles_y_pos[1] -= self.paddle_vel,
            "ArrowDown" => self.paddles_y_pos[1] += self.paddle_vel,
            _ => (),
        }
    }
}

