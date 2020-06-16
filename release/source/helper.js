"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Helper = void 0;
/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
/**
 * Request helper class.
 */
let Helper = class Helper extends Class.Null {
    /**
     * Get a new map containing all search parameters from the specified search string.
     * @param search Search string.
     * @returns Returns the new map.
     */
    static parseURLSearch(search) {
        const map = {};
        for (const entry of search.split('&')) {
            const [key, value] = entry.split('=');
            const name = key.trim();
            if (name.length > 0) {
                const decoded = decodeURIComponent(value.trim());
                const current = map[name];
                if (current !== void 0) {
                    if (current instanceof Array) {
                        current.push(decoded || true);
                    }
                    else {
                        map[name] = [current, decoded || true];
                    }
                }
                else {
                    map[name] = decoded || true;
                }
            }
        }
        return map;
    }
};
__decorate([
    Class.Public()
], Helper, "parseURLSearch", null);
Helper = __decorate([
    Class.Describe()
], Helper);
exports.Helper = Helper;
//# sourceMappingURL=helper.js.map