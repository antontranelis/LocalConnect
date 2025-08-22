-- Initialize PostGIS extension for geographic data
CREATE EXTENSION IF NOT EXISTS postgis;

-- Create some initial indexes for performance
-- These will be used by Directus for geographic queries