"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServicesModule = require("./services");
exports.Services = ServicesModule;
const MainModule = require("./main");
exports.Main = MainModule.Main;
// Aliases
exports.Filter = MainModule.Main.Filter;
exports.Processor = MainModule.Main.Processor;
