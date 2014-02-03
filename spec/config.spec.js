describe("Configuration setup", function() {
    it("should load local configurations", function(next) {
        var config = require('../config')();
        expect(config.mode).toBe('local');
        next();
    });
    it("should load cloud9 configurations", function(next) {
        var config = require('../config')('cloud9');
        expect(config.mode).toBe('cloud9');
        next();
    });
    it("should load remoteDB configurations", function(next) {
        var config = require('../config')('remoteDB');
        expect(config.mode).toBe('remoteDB');
        next();
    });
});