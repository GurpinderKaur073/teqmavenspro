import { motion, AnimatePresence } from 'framer-motion';
// import './App.css';

const GridCell = ({ index, onClick }) => (
  <motion.div
    className="bg-gray-800 rounded-lg flex items-center justify-center text-white cursor-pointer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => onClick(index)}
  >
    Cell {index + 1}
  </motion.div>
);

const Dialog = ({ isOpen, onClose, index }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        onClick={onClose}
      >
        <motion.div
          className="bg-gray-800 rounded-lg p-6 text-white w-3/4 h-3/4 flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
        >
          Expanded Cell {index + 1}
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

function App1() {
  const [selectedCell, setSelectedCell] = React.useState(null);

  const gridLayout = Array(9).fill().map((_, i) => i);

  return (
    <div className="min-h-screen bg-gray-900 p-4">11111
      {/* <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
        {gridLayout.map((index) => (
          <div key={index} className="aspect-square">
            <GridCell index={index} onClick={setSelectedCell} />
          </div>
        ))}
        <div className="col-span-3 flex justify-center">
          <div className="w-1/3 aspect-square bg-gray-800 rounded-full flex items-center justify-center"></div>
        </div>
      </div>
      <Dialog isOpen={selectedCell !== null} onClose={() => setSelectedCell(null)} index={selectedCell || 0} /> */}
    </div>
  );
}

export default App1;