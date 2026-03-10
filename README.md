# Likha-Sci

_A Microservices-Based High-Fidelity Marketplace for Scientific, Engineering, and AI Data_

## Overview

Likha-Sci (from the Filipino word _Likha_, meaning "to create") is a specialized, multi-vendor digital exchange designed for the **scientific, engineering, and artificial intelligence communities**. Unlike traditional e-commerce platforms, Likha-Sci distributes **computationally heavy, domain-specific assets** such as:

- Finite Element Analysis (FEA) meshes
- Volumetric medical scans (DICOM/NIfTI)
- High-dimensional machine learning datasets

The platform is built on a **decentralized microservices architecture** and integrates the Filipino cultural concept of _Bayanihan_ (communal unity). It functions both as:

- A **commercial marketplace** for proprietary research
- An **open-science repository** where experts contribute free data to foster global technological development

---

## Purpose & Objectives

Likha-Sci addresses the **Arrow Information Paradox** in data economics: buyers cannot fully verify the utility or compatibility of complex datasets before purchase.

**Core Objectives:**

- **Asset Centralization**: Unified repository for non-standard scientific file formats.
- **Interactive Verification**: Browser-based inspection of 3D meshes and volumetric data via WebGL/WebGPU.
- **Resource-Aware Transactions**: ML-driven checks to ensure datasets match users’ compute environments.
- **Community-Driven Science**: _Bayanihan tier_ encourages free contributions from researchers to support students and open science.

---

## Features & Functionalities

### 1. Sentro (Landing Page)

- Hero interactive 3D canvas
- Domain gateways (Engineering, MedTech, Data Science)
- _Bayanihan Spotlight_: carousel of peer-reviewed open-source assets

### 2. Explore Grid (Marketplace)

- Advanced scientific filters (vertex count, resolution, sparsity, file type)
- Dynamic asset cards with hover-based 360° previews
- Health & verification badges (e.g., manifold meshes, dataset completeness)

### 3. Asset Analysis Room (Detail Viewer)

- Domain-specific 3D viewport
- Engineering mode: wireframe, solid, normal-map views
- MedTech mode: volume raymarching with slicers
- Technical specification panel + ML-driven valuation insights

### 4. Science Cart (Checkout & Validation)

- System resource estimator (VRAM, memory footprint)
- Compatibility warnings for compute thresholds or format conflicts
- Transaction summary with currency or _Sci-Coins_

### 5. Unified Profile & Personal Library

- Identity & credentials panel with _Bayanihan Reputation Score_
- Laboratory vault for acquired datasets
- Contributor activation workflow

### 6. Contributor Studio (Seller Workspace)

- Multi-stage ingestion pipeline with auto-metadata extraction
- Algorithmic pricing suggestions
- Impact analytics (downloads, citations, revenue)

### 7. Global Notifications Hub

- Real-time task tracking (mesh decimation, format conversion, ML feature extraction)

---

## Technical Architecture

### Frontend

- **Framework**: React + Vite
- **Graphics**: Three.js, WebGL/WebGPU, OpenCascade.js

### Backend

- **Runtime**: Node.js + Express
- **API Gateway**: Routing, rate-limiting, Arcjet security middleware
- **Identity Service**: JWT authentication + RBAC
- **Catalog & Metadata Service**: CRUD for scientific assets
- **Finance & ML Service**: Resource estimation + transaction logic

### Database

- **PostgreSQL** with JSONB for flexible scientific metadata storage

---

## Cultural Integration

Likha-Sci embodies _Bayanihan_ by blending commerce with community-driven science. Contributors earn reputation and credits by sharing free, peer-reviewed datasets, ensuring equitable access to knowledge across borders.
