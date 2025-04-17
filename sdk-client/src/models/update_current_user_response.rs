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

/// UpdateCurrentUserResponse : Response containing the updated details of the authenticated user.
#[derive(Clone, Default, Debug, PartialEq, Serialize, Deserialize)]
pub struct UpdateCurrentUserResponse {
    #[serde(rename = "user")]
    pub user: Box<models::UserResponse>,
}

impl UpdateCurrentUserResponse {
    /// Response containing the updated details of the authenticated user.
    pub fn new(user: models::UserResponse) -> UpdateCurrentUserResponse {
        UpdateCurrentUserResponse {
            user: Box::new(user),
        }
    }
}

