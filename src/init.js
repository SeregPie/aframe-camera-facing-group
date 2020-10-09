import CameraFacingGroup from '@seregpie/three.camera-facing-group';

import name from './name';

export default function() {
	let {el} = this;
	let object = new CameraFacingGroup();
	el.setObject3D(name, object);
}
