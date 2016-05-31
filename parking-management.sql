DROP TABLE IF EXIST parking_lot_size CASCADE;

CREATE TABLE parking_lot_size (
  id SERIAL NOT NULL PRIMARY KEY,
  size VARCHAR(20) NOT NULL UNIQUE,
  description TEXT
);

DROP TABLE IF EXIST parking_lot CASCADE;

CREATE TABLE parking_lot (
  id VARCHAR(10) NOT NULL PRIMARY KEY,
  size_id INTEGER NOT NULL REFERENCES parking_lot_size(id),
  description TEXT
);

DROP TABLE IF EXIST vehicle_type CASCADE;

CREATE TABLE vehicle_type (
  id SERIAL NOT NULL PRIMARY KEY,
  type VARCHAR(20) NOT NULL UNIQUE,
  description TEXT
);

DROP TABLE IF EXIST vehicle CASCADE;

CREATE TABLE vehicle (
  id VARCHAR(10) NOT NULL PRIMARY KEY,
  type_id INTEGER REFERENCES vehicle_type(id);
  description TEXT
);

DROP TABLE IF EXIST parking_vehicle CASCADE;

CREATE TABLE parking_vehicle (
  id SERIAL NOT NULL,
  parking_lot_id VARCHAR(10) NOT NULL REFERENCES parking_lot(id),
  vehicle_id VARCHAR(10) REFERENCES vehicle(id);
  description TEXT,
  PRIMARY KEY(id, parking_lot_id, vehicle_id);
);

INSERT INTO parking_lot_size(size, description) VALUES('Micro', 'For bike only');
INSERT INTO parking_lot_size(size, description) VALUES('Mini', 'For bike or motorbike');
INSERT INTO parking_lot_size(size, description) VALUES('Small', 'For car has up to 5 seats');
INSERT INTO parking_lot_size(size, description) VALUES('Medium', 'For car has up to 9 seats');
INSERT INTO parking_lot_size(size, description) VALUES('Large', 'For car has from 10 to 30 seats');
INSERT INTO parking_lot_size(size, description) VALUES('Extra Large', 'For car has more than 30 seats');