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

/// HttpValidationError : Standard error response for validation errors.
#[derive(Clone, Default, Debug, PartialEq, Serialize, Deserialize)]
pub struct HttpValidationError {
    /// List of validation errors.
    #[serde(rename = "detail", skip_serializing_if = "Option::is_none")]
    pub detail: Option<Vec<models::ValidationError>>,
}

impl HttpValidationError {
    /// Standard error response for validation errors.
    pub fn new() -> HttpValidationError {
        HttpValidationError {
            detail: None,
        }
    }
}

