import { simpleAdd } from "./simple-add.js";
import { describe, it } from "node:test"
import assert from "node:assert";

describe("simple add", () => {
    it("adds two numbers correctly", () => {
        assert.strictEqual(simpleAdd(1, 2), 3)
    })
})