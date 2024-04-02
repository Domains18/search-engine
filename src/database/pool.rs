use std::env;

use sqlx::{postgres::PgPool, Pool, Postgres};

pub async fn init_pool() -> Result<Pool<Postgres>, sqlx::Error>{
    let host = env::var("DB_HOST").expect("failed to get db host var");
    let user = env::var("DB_USER").expect("failed to parse user from var");
    let name = env::var("DB_NAME").expect("failed to parse db name");
    let password = env::var("PASSWORD").expect("failed to parse password");


    let pool = PgPool::connect(format!("postgres://{}:{}@{}/{}", user, password, host, name).as_str()).await?;

    Ok(pool)
}
