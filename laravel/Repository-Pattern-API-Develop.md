# Re API Documentation

## Overview
The Footer API provides complete CRUD operations for managing footer links in the admin panel. This API follows the project's established patterns with repository architecture, role-based permissions, and standardized response formats.

## Table Structure
The footer table contains the following fields:
- `id` (integer, auto-increment, primary key)
- `title` (string, required) - Display text for the footer link
- `link_type` (integer, required) - 1 = internal link, 2 = external link
- `link` (string, required) - The actual URL or internal route
- `content` (text, optional) - Additional content/description
- `status` (boolean, default true) - Active/inactive status
- `created_at` (timestamp) - Record creation timestamp
- `updated_at` (timestamp) - Record modification timestamp
- `deleted_at` (timestamp) - Soft delete timestamp
- `created_by` (integer) - ID of user who created the record
- `modified_by` (integer) - ID of user who last modified the record

## Authentication
All footer API endpoints require:
- Bearer token authentication (`Authorization: Bearer {access_token}`)
- Appropriate permissions based on the operation (view, add, edit, delete)

## Base URL
```
/api/admin/footers
```

## Endpoints

### 1. List All Footers
**Endpoint:** `POST /api/admin/footers/all`

**Request Body:**
```json
{
    "search": "optional search term",
    "status": "1", // Optional: filter by status (0 or 1)
    "link_type": "1", // Optional: filter by link type (1 or 2)
    "trashed": "with", // Optional: "with", "only", or null
    "paginate": true, // Optional: enable pagination
    "length": 15 // Optional: items per page (default 15)
}
```

**Response:**
```json
{
    "status": true,
    "message": "Success.",
    "data": {
        "data": [
            {
                "id": 1,
                "title": "Privacy Policy",
                "link_type": 1,
                "link_type_text": "Internal",
                "link": "/privacy-policy",
                "content": "Link to privacy policy page",
                "status": true,
                "created_at": "2025-11-11 12:00:00",
                "updated_at": "2025-11-11 12:00:00",
                "deleted_at": null,
                "created_by": 1,
                "modified_by": null
            }
        ],
        "current_page": 1,
        "per_page": 15,
        "total": 1,
        "last_page": 1,
        "permissions": {
            "view": true,
            "add": true,
            "edit": true,
            "delete": true
        }
    }
}
```

### 2. Create Footer
**Endpoint:** `POST /api/admin/footers`

**Request Body:**
```json
{
    "title": "Terms of Service",
    "link_type": 2,
    "link": "https://example.com/terms",
    "content": "External link to terms of service",
    "status": true
}
```

**Response:**
```json
{
    "status": true,
    "message": "Created successfully.",
    "data": {
        "id": 2,
        "title": "Terms of Service",
        "link_type": 2,
        "link_type_text": "External",
        "link": "https://example.com/terms",
        "content": "External link to terms of service",
        "status": true,
        "created_at": "2025-11-11 12:05:00",
        "updated_at": "2025-11-11 12:05:00",
        "deleted_at": null,
        "created_by": 1,
        "modified_by": null
    }
}
```

### 3. Get Single Footer
**Endpoint:** `GET /api/admin/footers/{id}`

**Response:**
```json
{
    "status": true,
    "message": "Success.",
    "data": {
        "id": 1,
        "title": "Privacy Policy",
        "link_type": 1,
        "link_type_text": "Internal",
        "link": "/privacy-policy",
        "content": "Link to privacy policy page",
        "status": true,
        "created_at": "2025-11-11 12:00:00",
        "updated_at": "2025-11-11 12:00:00",
        "deleted_at": null,
        "created_by": 1,
        "modified_by": null
    }
}
```

### 4. Update Footer
**Endpoint:** `PUT /api/admin/footers/{id}`

**Request Body:**
```json
{
    "title": "Updated Privacy Policy",
    "link_type": 1,
    "link": "/privacy-policy-updated",
    "content": "Updated privacy policy link",
    "status": true
}
```

**Response:**
```json
{
    "status": true,
    "message": "Updated successfully.",
    "data": {
        "id": 1,
        "title": "Updated Privacy Policy",
        "link_type": 1,
        "link_type_text": "Internal",
        "link": "/privacy-policy-updated",
        "content": "Updated privacy policy link",
        "status": true,
        "created_at": "2025-11-11 12:00:00",
        "updated_at": "2025-11-11 12:10:00",
        "deleted_at": null,
        "created_by": 1,
        "modified_by": 1
    }
}
```

### 5. Delete Footer (Soft Delete)
**Endpoint:** `DELETE /api/admin/footers/{id}`

**Response:**
```json
{
    "status": true,
    "message": "Removed successfully.",
    "data": null
}
```

### 6. Restore Footer
**Endpoint:** `POST /api/admin/footers/restore/{id}`

**Response:**
```json
{
    "status": true,
    "message": "Success To Restore.",
    "data": {
        "id": 1,
        "title": "Privacy Policy",
        "link_type": 1,
        "link_type_text": "Internal",
        "link": "/privacy-policy",
        "content": "Link to privacy policy page",
        "status": true,
        "created_at": "2025-11-11 12:00:00",
        "updated_at": "2025-11-11 12:00:00",
        "deleted_at": null,
        "created_by": 1,
        "modified_by": null
    }
}
```

## Validation Rules

### Create/Update Footer
- `title`: Required, string, maximum 255 characters
- `link_type`: Required, integer, must be 1 (internal) or 2 (external)
- `link`: Required, string, maximum 500 characters
- `content`: Optional, string (text field)
- `status`: Optional, boolean (defaults to true)

## Error Responses

### Validation Error (422)
```json
{
    "status": false,
    "message": "Error Occured!!! Try again or contact with developer",
    "data": {
        "title": ["The title field is required."],
        "link_type": ["The link type must be either 1 (internal) or 2 (external)."]
    }
}
```

### Not Found Error (404)
```json
{
    "status": false,
    "message": "No Data Found."
}
```

### Permission Error (403)
```json
{
    "status": false,
    "message": "Forbidden: No edit permission"
}
```

### Server Error (500)
```json
{
    "status": false,
    "message": "Internal server error message"
}
```

## Link Types
- **1 = Internal**: For internal application routes (e.g., `/privacy-policy`, `/about-us`)
- **2 = External**: For external URLs (e.g., `https://example.com`, `mailto:info@example.com`)

## Filtering Options
- **search**: Search in title, content, and link fields
- **status**: Filter by status (0 = inactive, 1 = active)
- **link_type**: Filter by link type (1 = internal, 2 = external)
- **trashed**: Include soft-deleted records
  - `"with"`: Include both active and deleted records
  - `"only"`: Show only deleted records
  - `null`: Show only active records (default)

## Permissions Required
- **View**: Required for listing and viewing footers
- **Add**: Required for creating new footers
- **Edit**: Required for updating existing footers
- **Delete**: Required for deleting and restoring footers

## Usage Examples

### Create Internal Footer Link
```bash
curl -X POST "https://api.example.com/api/admin/footers" \
  -H "Authorization: Bearer {access_token}" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "About Us",
    "link_type": 1,
    "link": "/about-us",
    "content": "Learn more about our company",
    "status": true
  }'
```

### Create External Footer Link
```bash
curl -X POST "https://api.example.com/api/admin/footers" \
  -H "Authorization: Bearer {access_token}" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Contact Support",
    "link_type": 2,
    "link": "mailto:support@example.com",
    "content": "Email us for support",
    "status": true
  }'
```

### Search Footers
```bash
curl -X POST "https://api.example.com/api/admin/footers/all" \
  -H "Authorization: Bearer {access_token}" \
  -H "Content-Type: application/json" \
  -d '{
    "search": "privacy",
    "status": "1",
    "paginate": true,
    "length": 10
  }'
```

## Integration Notes
- All responses include user permissions for the current route
- Timestamps are in `Y-m-d H:i:s` format
- Soft deletes are enabled - deleted records can be restored
- All create/update operations track the user who performed the action
- The `link_type_text` field provides human-readable link type descriptions

## Related Files
- **Model**: `app/Models/Footer.php`
- **Controller**: `app/Http/Controllers/Api/Admin/FooterController.php`
- **Repository**: `app/Repositories/Admin/FooterRepository.php`
- **Requests**: `app/Http/Requests/Admin/Footer/`
- **Resource**: `app/Http/Resources/Admin/Footer/FooterResource.php`
- **Migration**: `database/migrations/2025_11_11_045815_create_footers_table.php`
- **Routes**: `routes/api/admin.php`
