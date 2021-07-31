import { Message } from "./components/Message";
import { FocusableInput } from "./components/FocusableInput";
import { ImageGallery } from "./components/ImageGallery";
import { PlayerStatus } from "./components/PlayerStatus";
import { TeamsList } from "./components/TeamsList";
import { Grocery } from "./components/Grocery";
import { ListItemsForNavigation } from "./components/ListItemsForNavigation";
import { ListItemsForNavigationTest } from "./components/ListItemsForNavigationTest";
import { Rating } from "./components/Rating";

import './App.css';



export default function App () {
  let products = [{ name: "Oranges", votes: 0 }, { name: "Bananas", votes: 0 },
  { name: "Apples", votes: 0 }, { name: "Watermelon", votes: 0 }];
  let imgLinks = [ {name: 'img1', uri:require('./images/img1.jpg')}, {name: 'img2', uri:require('./images/img2.jpg')}, {name: 'img3', uri:require('./images/img3.jpg')}]
  return (
    <div className="App">
      {/* Render here each component from the "components" directory */}
      <h3>'Message' test</h3> {/* Done */}
      <Message />
      <br />
      <h3>'FocusableInput' test (It did not work out, lack of knowledge on refs) </h3>
      <FocusableInput focused={true}/>
      <br />
      <h3>'ImageGallery' test</h3>
      <ImageGallery links={imgLinks}/>
      <br />
      <h3>'PlayerStatus' test</h3> {/* Done */}
      <PlayerStatus />
      <br />
      <h3>'TeamsList' test</h3> {/* Done */}
      <TeamsList />
      <br />
      <h3>'Grocery' test</h3> {/* Done */}
      <Grocery data={products} />
      <br />
      <h3>'ListItemsForNavigation' test (It did not work out, found alternative but its not what the challenge is aimed for)</h3>
      <ListItemsForNavigation />
      <ListItemsForNavigationTest/>
      <br />
      <h3>'Rating' test</h3> {/* Done */}
      <Rating />
    </div>
  );
}
