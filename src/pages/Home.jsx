import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCard } from '../redux/cardSlice';
import Card from '../components/Card';

function Home() {
  const dispatch = useDispatch(); // send actions to Redux
  const cards = useSelector((state) => state.cards.items); // get cards from store

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleAddCard = (e) => {
    e.preventDefault();

    if (title.trim() && desc.trim()) {
      // Send new card to Redux
      dispatch(addCard({ title, description: desc }));
      setTitle('');
      setDesc('');
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-3xl font-bold mb-2">Welcome to DevConnect</h2>

      <form onSubmit={handleAddCard} className="space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="w-full p-2 border rounded"
        ></textarea>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add Card
        </button>
      </form>

      <div className="grid md:grid-cols-2 gap-4">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
}

export default Home;