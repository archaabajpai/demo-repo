'use client';

import { useState } from 'react';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');

  const cards = [
    {
      icon: '🚀',
      title: 'Fast',
      description: 'Built with Next.js for optimal performance'
    },
    {
      icon: '🎨',
      title: 'Styled',
      description: 'Beautiful UI with Tailwind CSS'
    },
    {
      icon: '⚡',
      title: 'Responsive',
      description: 'Works great on all devices'
    }
  ];

  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    card.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedCards = [...filteredCards].sort((a, b) => {
    if (sortOption === 'A-Z') {
      return a.title.localeCompare(b.title);
    } else if (sortOption === 'Z-A') {
      return b.title.localeCompare(a.title);
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Demo App</h1>
          <p className="text-gray-600 mt-1">Welcome to our application</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Search your card"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="" disabled>Filter</option>
              <option value="A-Z">Sort A-Z</option>
              <option value="Z-A">Sort Z-A</option>
            </select>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome</h2>
          <p className="text-gray-600 mb-6">
            This is a basic demo application built with Next.js and Tailwind CSS.
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg transition">
            Get Started
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sortedCards.map((card, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="text-indigo-600 text-3xl mb-4">{card.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-12">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <p className="text-center text-gray-400">© 2024 Demo App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}