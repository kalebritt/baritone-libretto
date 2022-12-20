const { AuthenticationError } = require("apollo-server-express");
const { User, Location, Incident, Event } = require("../models");
const { signToken } = require("../utils/auth");
