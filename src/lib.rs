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
    ball_pos: Vec<f64>,
    ball_vel: Vec<f64>,
    paddles_y_pos: Vec<f64>,
} 

#[wasm_bindgen]
impl Universe {
    pub fn new(height: u16,width: u16, paddle_height:u16) -> Universe {
        Universe {
            height,
            width,
            paddle_height,
            ball_pos: vec!((height/2) as f64, (width/2) as f64),
            ball_vel: vec!(0.0,5.0),
            paddles_y_pos: vec!((height/2) as f64, (height/2) as f64),
        }
    }

    pub fn tick(&mut self) {
        self.ball_pos[0] += self.ball_vel[0];
        self.ball_pos[1] += self.ball_vel[1];

        if self.ball_pos[0] < 0.0 || self.ball_pos[0] > (self.height as f64) {
            self.ball_vel[0] = self.ball_vel[0]*(-1 as f64);
        }

        if (self.ball_pos[1] < 10.0 && (self.ball_pos[0] - self.paddles_y_pos[0]).abs() < (self.paddle_height/2) as f64) ||
           (self.ball_pos[1] > (self.width - 10) as f64 && (self.ball_pos[0] - self.paddles_y_pos[1]).abs() < (self.paddle_height/2) as f64)
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
}

