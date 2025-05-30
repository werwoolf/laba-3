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

use serde_with::serde_as;

/// UpdateCurrentUserRequest : Request body for updating the authenticated user's profile, such as their avatar.
#[serde_as]
#[derive(Clone, Default, Debug, PartialEq, Serialize, Deserialize)]
pub struct UpdateCurrentUserRequest {
    /// Base64-encoded string representing the user's new avatar image.
    #[serde_as(as = "Option<serde_with::base64::Base64>")]
    #[serde(rename = "avatar", skip_serializing_if = "Option::is_none")]
    pub avatar: Option<Vec<u8>>,
}

impl UpdateCurrentUserRequest {
    /// Request body for updating the authenticated user's profile, such as their avatar.
    pub fn new() -> UpdateCurrentUserRequest {
        UpdateCurrentUserRequest {
            avatar: None,
        }
    }
}

