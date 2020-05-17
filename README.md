# simver
Most Simple Version object ever.

```
const Version = require("simver");
const snapshotA = new Version("1.10.3");
const snapshotB = new Version("1.10.3.6");

if (snapshotA > snapshotB) { ... } else { ... }

const releaseSemanticVersion = snapshotB.getVersion(); // "1.10.3"

const internalBuildVersion = snapshotB.getBuild(); // "6"

const wholeVersion = `${snapshotB}`; // "1.10.3.6"

```
