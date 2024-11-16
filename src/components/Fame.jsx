import React from 'react';

function Fame() {
  const stats = [
    { value: '1000+', label: 'Practice Quizzes' },
    { value: '100+', label: 'Experts' },
    { value: '10+', label: 'Collaboration' },
    { value: '1000+', label: 'Enrolled Students' },
    { value: '91%', label: 'Success Rate' },
  ];

  return (
    <section className="bg-purple-900 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-4 md:px-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-2 w-1/2 md:w-1/5 mb-4 md:mb-0"
          >
            <h3 className="text-4xl font-bold text-white">{stat.value}</h3>
            <p className="text-sm md:text-base">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Fame;
