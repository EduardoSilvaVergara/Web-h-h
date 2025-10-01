import React from 'react';
import '../css/SearchBar.css';

export default function SearchBar({ onSearch }) {
  return (
    <div className="search-bar-container mb-5">
      <input
        type="text"
        placeholder="Buscar..."
        className="search-input"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}


// import React, { useState } from 'react';
// import SearchBar from '../components/SearchBar';

// export default function Catalog() {
//   const [searchQuery, setSearchQuery] = useState('');

//   const items = [
//     { nombre: 'Manzanas' },
//     { nombre: 'Tomates' },
//     { nombre: 'Lechuga' },
//   ];

//   // Filtrar items según searchQuery
//   const filteredItems = items.filter(item =>
//     item.nombre.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div>
//       <SearchBar onSearch={setSearchQuery} />
//       <div className="cards-container">
//         {filteredItems.map((item, index) => (
//           <div key={index} className="card">
//             <h5>{item.nombre}</h5>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
