/**
 * You have a Grocery component, which receives a list of products, each one with name and votes.
 * - The app should render an unordered list, with a list item for each product.
 * - Products can be upvoted or downvoted.
 * By appropriately using React state and props, implement the upvote/downvote logic. Keep the state in the topmost component, while the Product component should accept props.
 *
 * For example, passing the following array as products prop to Grocery
 * [{ name: "Oranges", votes: 0 }, { name: "Bananas", votes: 0 }]
 * and clicking the '+' button next to the Oranges should result in HTML like:
 *
 *   <ul>
 *     <li>
 *       <span>Oranges - votes: 1</span>
 *       <button>+</button>
 *       <button>-</button>
 *     </li>
 *     <li>
 *       <span>Bananas - votes: 0</span>
 *       <button>+</button>
 *       <button>-</button>
 *     </li>
 *   </ul>
 */

import { useState } from "react";

function Product ( props ) {
	let { name, votes } = props.products[props.index]
	const setProducts = props.setProducts
	const [productVotes, setProductVotes] = useState( votes )

	function handlePlus () {

		const products = [...props.products];
		products.splice( props.index, 1, {
			name: name,
			votes: productVotes + 1
		} )
		setProductVotes( productVotes + 1 )
		setProducts( products )

		// product.votes = product.votes + 1
	}

	function handleMinus () {
		const products = [...props.products];
		products.splice( props.index, 1, {
			name: name,
			votes: productVotes - 1
		} )
		setProductVotes( productVotes - 1 )
		setProducts( products )
	}

	return (
		<li>
			<span>
				{name} - votes: {votes}
			</span>
			<button onClick={handlePlus}>+</button>
			<button onClick={handleMinus}>-</button>
		</li>
	);
}

export function Grocery ( { data } ) {
	const [products, setProducts] = useState( data )
	return (
		<ul>
			{products.map( ( product, index ) => <Product index={index} products={products} setProducts={setProducts} /> )}
			{/* Render an array of products, which should call onVote when + or - is clicked */}
		</ul>
	);
}
