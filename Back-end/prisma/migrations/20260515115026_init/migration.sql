BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[historical_periods] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(255) NOT NULL,
    [slug] NVARCHAR(255) NOT NULL,
    [summary] NVARCHAR(1000),
    [description] NVARCHAR(max),
    [startYear] INT,
    [endYear] INT,
    [searchText] NVARCHAR(max),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [historical_periods_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [historical_periods_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [historical_periods_name_key] UNIQUE NONCLUSTERED ([name]),
    CONSTRAINT [historical_periods_slug_key] UNIQUE NONCLUSTERED ([slug])
);

-- CreateTable
CREATE TABLE [dbo].[historical_locations] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(255) NOT NULL,
    [slug] NVARCHAR(255) NOT NULL,
    [region] NVARCHAR(100),
    [province] NVARCHAR(100),
    [latitude] DECIMAL(10,6),
    [longitude] DECIMAL(10,6),
    [title] NVARCHAR(255),
    [summary] NVARCHAR(max),
    [description] NVARCHAR(max),
    [quote] NVARCHAR(max),
    [featured_image] NVARCHAR(500),
    [map_image] NVARCHAR(500),
    [period] NVARCHAR(255),
    [search_tags] NVARCHAR(max),
    [created_at] DATETIME2 CONSTRAINT [historical_locations_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2,
    CONSTRAINT [historical_locations_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [historical_locations_name_key] UNIQUE NONCLUSTERED ([name]),
    CONSTRAINT [historical_locations_slug_key] UNIQUE NONCLUSTERED ([slug])
);

-- CreateTable
CREATE TABLE [dbo].[historical_events] (
    [id] INT NOT NULL IDENTITY(1,1),
    [title] NVARCHAR(255) NOT NULL,
    [slug] NVARCHAR(255) NOT NULL,
    [summary] NVARCHAR(1000),
    [description] NVARCHAR(max),
    [startYear] INT,
    [endYear] INT,
    [searchText] NVARCHAR(max),
    [periodId] INT,
    [locationId] INT,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [historical_events_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [historical_events_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [historical_events_title_key] UNIQUE NONCLUSTERED ([title]),
    CONSTRAINT [historical_events_slug_key] UNIQUE NONCLUSTERED ([slug])
);

-- CreateTable
CREATE TABLE [dbo].[historical_characters] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(255) NOT NULL,
    [slug] NVARCHAR(255) NOT NULL,
    [summary] NVARCHAR(1000),
    [description] NVARCHAR(max),
    [birthYear] INT,
    [deathYear] INT,
    [searchText] NVARCHAR(max),
    [periodId] INT,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [historical_characters_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [historical_characters_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [historical_characters_name_key] UNIQUE NONCLUSTERED ([name]),
    CONSTRAINT [historical_characters_slug_key] UNIQUE NONCLUSTERED ([slug])
);

-- CreateTable
CREATE TABLE [dbo].[character_events] (
    [id] INT NOT NULL IDENTITY(1,1),
    [characterId] INT NOT NULL,
    [eventId] INT NOT NULL,
    [role] NVARCHAR(255),
    CONSTRAINT [character_events_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [character_events_characterId_eventId_key] UNIQUE NONCLUSTERED ([characterId],[eventId])
);

-- CreateTable
CREATE TABLE [dbo].[character_timelines] (
    [id] INT NOT NULL IDENTITY(1,1),
    [characterId] INT NOT NULL,
    [year] INT,
    [title] NVARCHAR(255) NOT NULL,
    [description] NVARCHAR(1000),
    CONSTRAINT [character_timelines_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[location_images] (
    [id] INT NOT NULL IDENTITY(1,1),
    [locationId] INT NOT NULL,
    [imageUrl] NVARCHAR(1000) NOT NULL,
    [caption] NVARCHAR(255),
    CONSTRAINT [location_images_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[event_images] (
    [id] INT NOT NULL IDENTITY(1,1),
    [eventId] INT NOT NULL,
    [imageUrl] NVARCHAR(1000) NOT NULL,
    [caption] NVARCHAR(255),
    CONSTRAINT [event_images_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[character_images] (
    [id] INT NOT NULL IDENTITY(1,1),
    [characterId] INT NOT NULL,
    [imageUrl] NVARCHAR(1000) NOT NULL,
    [caption] NVARCHAR(255),
    CONSTRAINT [character_images_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[historical_events] ADD CONSTRAINT [historical_events_periodId_fkey] FOREIGN KEY ([periodId]) REFERENCES [dbo].[historical_periods]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[historical_events] ADD CONSTRAINT [historical_events_locationId_fkey] FOREIGN KEY ([locationId]) REFERENCES [dbo].[historical_locations]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[historical_characters] ADD CONSTRAINT [historical_characters_periodId_fkey] FOREIGN KEY ([periodId]) REFERENCES [dbo].[historical_periods]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[character_events] ADD CONSTRAINT [character_events_characterId_fkey] FOREIGN KEY ([characterId]) REFERENCES [dbo].[historical_characters]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[character_events] ADD CONSTRAINT [character_events_eventId_fkey] FOREIGN KEY ([eventId]) REFERENCES [dbo].[historical_events]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[character_timelines] ADD CONSTRAINT [character_timelines_characterId_fkey] FOREIGN KEY ([characterId]) REFERENCES [dbo].[historical_characters]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[location_images] ADD CONSTRAINT [location_images_locationId_fkey] FOREIGN KEY ([locationId]) REFERENCES [dbo].[historical_locations]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[event_images] ADD CONSTRAINT [event_images_eventId_fkey] FOREIGN KEY ([eventId]) REFERENCES [dbo].[historical_events]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[character_images] ADD CONSTRAINT [character_images_characterId_fkey] FOREIGN KEY ([characterId]) REFERENCES [dbo].[historical_characters]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
