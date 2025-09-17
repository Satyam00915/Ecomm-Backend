# Picotex Backend Ecommerce API Documentation

This document describes the available API endpoints for the Picotex Backend Ecommerce project, including required body parameters.

---


## Categories

### POST `/api/products/addCategory`
Add a new category.

**Body Parameters:**
- `name` (string, required)

---

### GET `/api/products/getAllCategories`
Get all categories.

_No body parameters required._

---

### POST `/api/products/removeCategory`
Remove a category by ID.

**Body Parameters:**
- `id` (number, required)

---
