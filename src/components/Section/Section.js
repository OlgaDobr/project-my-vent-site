import React from 'react';
import './Section.css'; // Ваши стили для секций
	
	function Section({ title, children, className = '' }) {
	  return (
	    <section className={`custom-section ${className}`}>
	      <h2 className="text-center mb-4">{title}</h2>
	      {children}
	    </section>
	  );
	}
	
	export default Section;
