mod utils;

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
    ball_pos: Vec<f64>,
    ball_vel: Vec<f64>,
} 

#[wasm_bindgen]
impl Universe {
    pub fn new(height: u16,width: u16) -> Universe {
        Universe {
            height,
            width,
            ball_pos: vec!((height/2) as f64, (width/2) as f64),
            ball_vel: vec!(2 as f64,5 as f64),
        }
    }

    pub fn tick(&mut self) {
        self.ball_pos[0] += self.ball_vel[0];
        self.ball_pos[1] += self.ball_vel[1];

        if self.ball_pos[0] < 0.0 || self.ball_pos[0] > (self.height as f64) {
            self.ball_vel[0] = self.ball_vel[0]*(-1 as f64);
        }

        if self.ball_pos[1] < 0.0 || self.ball_pos[1] > (self.width as f64) {
            self.ball_vel[1] = self.ball_vel[1]*-1.0;
        }
    }

    pub fn ball_pos(&self) -> *const f64 {
        self.ball_pos.as_ptr()
    }
}

