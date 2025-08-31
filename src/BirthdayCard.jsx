import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";


export default function BirthdayCard() {
const [showMessage, setShowMessage] = useState(false);


return (
<div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-200 to-purple-300 p-6">
<motion.h1
initial={{ opacity: 0, y: -30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 1 }}
className="text-4xl md:text-6xl font-bold text-pink-700 drop-shadow-lg"
>
🎉 Joyeux Anniversaire ! 🎉
</motion.h1>


<motion.div
className="grid grid-cols-3 gap-6 mt-12"
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ delay: 0.5 }}
>
{[...Array(6)].map((_, i) => (
<motion.button
key={i}
whileHover={{ scale: 1.2 }}
whileTap={{ scale: 0.9, rotate: -10 }}
onClick={() => setShowMessage(true)}
className="p-6 rounded-2xl bg-white shadow-lg flex items-center justify-center"
>
<Heart className="text-pink-500 w-10 h-10" />
</motion.button>
))}
</motion.div>


{showMessage && (
<motion.div
initial={{ opacity: 0, scale: 0.5 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.7 }}
className="mt-12 bg-white rounded-2xl shadow-xl p-6 max-w-lg text-center"
>
<h2 className="text-2xl font-semibold text-pink-600">💖 Un message spécial 💖</h2>
<p className="mt-4 text-lg text-gray-700">
Tu rends mon monde plus lumineux chaque jour. Je suis tellement
reconnaissant(e) pour toi, et j’ai hâte de créer encore plus de
souvenirs ensemble. Joyeux anniversaire, mon amour ! 🥰🎂
</p>
</motion.div>
)}
</div>
);
}
