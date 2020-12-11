import name from './name';

export default function() {
	let {el} = this;
	let object = el.getObject3D(name);
	if (object) {
		el.object3D.quaternion.copy(object.quaternion);
	}
}
