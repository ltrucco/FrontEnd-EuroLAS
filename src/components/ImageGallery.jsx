/**
 * Implement the ImageGallery component that accepts a `links`
 * prop and renders the gallery so that the first
 * item in the links prop is the src attribute of the first image in the gallery.

 * It should also implement the following logic:
 * - When the button is clicked, the image that is in the same div as the button should be removed from the gallery.
 */

import { useState } from "react";

function Image({ src, onRemove, index }) {
	return (
		<div class="image">
			<img src={src.default} width={200} height={100} alt={'Coding' + index}/>
			<button onClick={() => onRemove(index)} class="remove">X</button>
		</div>
	);
}

export function ImageGallery({ links }) {
	const [images, setImages] = useState( links )

	const removeImg = (index) =>{
		let imagesAux = [...images]
		imagesAux.splice(index,1)
		setImages(imagesAux)
	}

	return (
		<div>
			{images.map((l,i) => 
				<Image src={l.uri} onRemove={(index) => removeImg(index)} index={i}/>
			)}
			{images.length ==0 && <button onClick={() => setImages(links)}>Redraw images</button>}
			
		</div>
	);
}
