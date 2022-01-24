-- PostGIS
CREATE EXTENSION IF NOT EXISTS postgis schema "public";

-- TimeScaleDB
CREATE EXTENSION IF NOT EXISTS timescaledb CASCADE;

-- CreateTable
CREATE TABLE "Node" (
    "id" TEXT NOT NULL,
    "nodeName" TEXT NOT NULL,
    "location" "public".geography,

    CONSTRAINT "Node_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Log" (
    "id" SERIAL NOT NULL,
    "logged_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "hash" TEXT NOT NULL,
    "battery_voltage" DOUBLE PRECISION NOT NULL,
    "clockBattery_voltage" DOUBLE PRECISION NOT NULL,
    "temperature_celsius" DOUBLE PRECISION NOT NULL,
    "nitrate_mg_P_L" DOUBLE PRECISION NOT NULL,
    "nitrate_mV" DOUBLE PRECISION NOT NULL,
    "speciicConductivity_mS_P_cm" DOUBLE PRECISION NOT NULL,
    "salinity_psu" DOUBLE PRECISION NOT NULL,
    "totalDissolvedSolids_g_P_L" DOUBLE PRECISION NOT NULL,
    "rawCoductivity_uS_P_cm" DOUBLE PRECISION NOT NULL,
    "pH_units" DOUBLE PRECISION NOT NULL,
    "pH_mV" DOUBLE PRECISION NOT NULL,
    "referece_mV" DOUBLE PRECISION NOT NULL,
    "node_id" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Log_node_id_logged_at_key" ON "Log"("node_id", "logged_at");

-- AddForeignKey
ALTER TABLE "Log" ADD CONSTRAINT "Log_node_id_fkey" FOREIGN KEY ("node_id") REFERENCES "Node"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

SELECT "public".create_hypertable('"Log"', 'logged_at');