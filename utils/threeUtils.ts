import * as THREE from "three";

export const disposeMaterial = (
	material: THREE.Material | THREE.Material[]
) => {
	if (Array.isArray(material)) {
		material.forEach((m) => m.dispose());
	} else {
		material.dispose();
	}
};

export const disposeObject = (object: THREE.Object3D) => {
	object.traverse((child: any) => {
		if (child.geometry) {
			child.geometry.dispose();
		}
		if (child.material) {
			disposeMaterial(child.material);
		}
		if (child.texture) {
			child.texture.dispose();
		}
	});
};
