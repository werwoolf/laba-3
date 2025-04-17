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

/// DeleteUserPhotoResponse : Response indicating whether the user's avatar was successfully deleted.
#[derive(Clone, Default, Debug, PartialEq, Serialize, Deserialize)]
pub struct DeleteUserPhotoResponse {
    /// True if the avatar was deleted successfully.
    #[serde(rename = "status")]
    pub status: bool,
}

impl DeleteUserPhotoResponse {
    /// Response indicating whether the user's avatar was successfully deleted.
    pub fn new(status: bool) -> DeleteUserPhotoResponse {
        DeleteUserPhotoResponse {
            status,
        }
    }
}

