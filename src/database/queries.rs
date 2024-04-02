use std::collections::HashMap;
use sqlx::{Pool, Postgres};


use crate::Website;

#[derive(sqlx::FromRow)]
pub struct Keyword {
    pub url: String,
    pub word_count: i32,
    pub title: String,
    pub description: String,
    pub word: String,
    pub rank: i32,
    pub occurrences: i32,
    pub position: i32,
    pub documents_containing_word: i64,
}


pub async fn get_document_count(db_pool: Pool<Postgres>) -> Result<(i64,), sqlx::Error>{
    sqlx::query_as("SELECT COUNT(*) FROM websites;")
        .fetch_one(&db_pool)
        .await
}
