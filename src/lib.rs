#[macro_use] mod utils;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

// #[wasm_bindgen]
// extern {
//     fn alert(s: &str);
// }

// #[wasm_bindgen]
// pub fn greet() {
//     alert("Hng!");
// }


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
} 

#[wasm_bindgen]
impl Universe {
    pub fn new(height: u16, width: u16, paddle_height:u16, paddle_width: u16, paddle_x_offset: u16, ball_size:u16, paddle_vel: f64) -> Universe {
        
        Universe {
            height,
            width,
            paddle_height,
            paddle_x_pos: paddle_width + paddle_x_offset,
            ball_size,
            ball_pos: vec!((height/2) as f64, (width/2) as f64),
            ball_vel: vec!(if js_sys::Math::random() < 0.5 { 1.0 } else { -1.0 },5.0),
            paddles_y_pos: vec!((height/2) as f64, (height/2) as f64),
            paddle_vel
        }
    }

    pub fn tick(&mut self) {
        self.ball_pos[0] += self.ball_vel[0];
        self.ball_pos[1] += self.ball_vel[1];

        let ball_x = self.ball_pos[0];
        let ball_y = self.ball_pos[1];

        let ball_paddle_0_y_diff = self.ball_pos[0] - self.paddles_y_pos[0];
        let ball_paddle_1_y_diff = self.ball_pos[0] - self.paddles_y_pos[1];

        if ball_x < 0.0 || ball_x > (self.height as f64) {
            self.ball_vel[0] = self.ball_vel[0]*-1.0;
        }

        if (ball_y < self.paddle_x_pos as f64 && ball_paddle_0_y_diff.abs() < (self.paddle_height/2) as f64) ||
           (ball_y > (self.width - self.paddle_x_pos) as f64 && ball_paddle_1_y_diff.abs() < (self.paddle_height/2) as f64)
        { 
            self.ball_vel[1] = self.ball_vel[1]*-1.0;
        }

    }

    pub fn ball_pos(&self) -> *const f64 {
        self.ball_pos.as_ptr()
    }

    pub fn paddles_y_pos(&self) -> *const f64 {
        self.paddles_y_pos.as_ptr()
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

