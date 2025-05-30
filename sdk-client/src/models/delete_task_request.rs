/*
 * Vestra Compliance API
 *
 * Vestra Compliance Backend REST API for managing users, tasks, and compliance-related operations. This is version 1.0; future versions may introduce breaking changes. All endpoints require authentication unless explicitly stated otherwise.
 *
 * The version of the OpenAPI document: 1.0
 * 
 * Generated by: https://openapi-generator.tech
 */

use crate::models;
use serde::{Deserialize, Serialize};

/// DeleteTaskRequest : Request body for deleting a task.
#[derive(Clone, Default, Debug, PartialEq, Serialize, Deserialize)]
pub struct DeleteTaskRequest {
    /// Unique identifier of the task to delete.
    #[serde(rename = "id")]
    pub id: i32,
}

impl DeleteTaskRequest {
    /// Request body for deleting a task.
    pub fn new(id: i32) -> DeleteTaskRequest {
        DeleteTaskRequest {
            id,
        }
    }
}

