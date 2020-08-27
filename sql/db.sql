CREATE TABLE IF NOT EXISTS  project(
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name text NOT NULL CHECK (name <> ''),
    priority integer NOT NULL,
    description text,
    deliverydate date NOT NULL
);
CREATE TABLE IF NOT EXISTS  task(
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name text NOT NULL CHECK (name <> ''),
    done BOOLEAN,
    projectid INTEGER REFERENCES project(id)
);

-- Insert data project
insert into project (name, priority, description, deliverydate) values ('Make an App',1,'Using a Language Javascript',25-11-2020);

-- Insert data task
insert into task (name, done, projectid) values ('Download VueJs',false,1)