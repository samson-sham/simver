# simver
Most Simple Version object ever.
Provides 4 attributes: Major, Minor, Patch, Build

# Basics
```
const Version = require("simver");

const snapshotA = new Version("1.10.3");
const snapshotB = new Version("1.10.3.6");

if (snapshotA > snapshotB) { ... } else { ... }

const releaseSemanticVersion = snapshotB.getVersion(); // "1.10.3"

const internalBuildVersion = snapshotB.getBuild(); // "6"

const wholeVersion = `${snapshotB}`; // "1.10.3.6"

```

# Upgrades
Be careful Version is mutable object though
```
const buildUpgrade = snapshotB.build(); // "1.10.3.7"

const patchUpgrade = snapshotB.patch(); // "1.10.4.0"

const minorUpgrade = snapshotB.minor(); // "1.11.0.0"

const majorUpgrade = snapshotB.major(); // "2.0.0.0"


// Skip any version interval if necessary

const skipPatchUpgrade = snapshotA.patch(2); //  "1.10.5"


// If original version does not have enough attribute,
// upgrades to non-existing attribute will be ignored 

const nochange = (new Version("10.5")).patch(); // "10.5", since no patch

```

# Limitations
Each of the attributes except Major (Minor, Patch, Build) can only have 2 digit

Ranged from 0.0.0.0 to n.99.99.99