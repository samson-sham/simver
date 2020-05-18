const MAX_NUM_ATTRIBUTE = 4;
class Version {
    /**
     * Assumptions:
     * - Maximum of sematic versioning attributes is 4
     *      - Major
     *      - Minor
     *      - Patch
     *      - Build
     * - Each of the attributes are within [0..99], no more than 2 digit
     * @param {string} versionString 
     */
    constructor(versionString) {
        this.seperator = '.';
        if (versionString.split(this.seperator).length > MAX_NUM_ATTRIBUTE) throw new Error("Version number not supported");
        this.version = versionString;
    }
    __verUp(index, step) {
        return this.version.split(this.seperator).map((ver, i) => {
            if (i<index) return ver;
            if (i===index) return parseInt(ver) + step;
            return 0;
        }).join(this.seperator);
    }
    major(step = 1) {
        this.version = this.__verUp(0,step);
        return this
    }
    minor(step = 1) {
        this.version = this.__verUp(1,step);
        return this;
    }
    patch(step = 1) {
        this.version = this.__verUp(2,step);
        return this;
    }
    build(step = 1) {
        this.version = this.__verUp(3,step);
        return this;
    }
    /**
     * This will get the Semantic Version without Build attribute
     */
    getVersion() {
        return this.version.split(this.seperator).slice(0, 3).join(this.seperator);
    }
    /**
     * This will get only the Build attribute
     */
    getBuild() {
        return this.version.split(this.seperator).pop();
    }
    toString() {
        return this.version;
    }
    valueOf() {
        return this.version.split(this.seperator).reduce((sum, ver, index) => {
            const magnitude = MAX_NUM_ATTRIBUTE - 1 - index;
            return sum + ver * (100 ** magnitude);
        }, 0);
    }
}
module.exports = exports = Version;