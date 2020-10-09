import AFRAME from 'aframe';

import init from './init';
import name from './name';
import remove from './remove';
import tick from './tick';

AFRAME.registerComponent(name, {
	init,
	remove,
	tick,
});
