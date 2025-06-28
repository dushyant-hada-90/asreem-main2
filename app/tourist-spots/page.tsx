import Image from "next/image";

const spots = [
	{
		name: "Statue of Unity",
		location: "Kevadia, Narmada District",
		photo: "/tourist-spots/statue-of-unity.jpg",
		desc: "World's tallest statue, dedicated to Sardar Vallabhbhai Patel, surrounded by beautiful landscapes and attractions.",
	},
	{
		name: "Somnath Temple",
		location: "Prabhas Patan, Gir Somnath",
		photo: "/tourist-spots/somnath.jpg",
		desc: "One of the twelve Jyotirlinga shrines of Shiva, renowned for its spiritual significance and stunning seaside location.",
	},
	{
		name: "Gir National Park",
		location: "Junagadh District",
		photo: "/tourist-spots/gir.jpg",
		desc: "The only natural habitat of Asiatic lions, offering thrilling wildlife safaris and rich biodiversity.",
	},
	{
		name: "Rann of Kutch",
		location: "Kutch District",
		photo: "/tourist-spots/rann-of-kutch.jpg",
		desc: "A spectacular salt desert, famous for the Rann Utsav, vibrant culture, and breathtaking white landscapes.",
	},
	{
		name: "Sabarmati Ashram",
		location: "Ahmedabad",
		photo: "/tourist-spots/sabarmati-ashram.jpg",
		desc: "Historic residence of Mahatma Gandhi, now a museum and peaceful retreat on the banks of the Sabarmati River.",
	},
	{
		name: "Dwarkadhish Temple",
		location: "Dwarka",
		photo: "/tourist-spots/dwarka.jpg",
		desc: "Ancient Hindu temple dedicated to Lord Krishna, a major pilgrimage site with stunning architecture.",
	},
];

export default function TouristSpots() {
	return (
		<div className="py-12 bg-white min-h-screen">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
					Tourist Spots in Gujarat
				</h1>
				<div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
				<p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-10">
					Discover the vibrant culture, history, and natural beauty of Gujarat.
					Here are some must-visit destinations for your journey.
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
					{spots.map((spot, idx) => (
						<div
							key={idx}
							className="bg-gradient-to-br from-amber-50 via-white to-yellow-100 rounded-2xl shadow-md flex flex-col items-center p-6 border border-amber-100 hover:scale-105 transition-transform duration-200 group"
						>
							<div className="w-40 h-40 mb-4 relative rounded-xl overflow-hidden border-2 border-amber-200 bg-white shadow group-hover:border-yellow-400">
								<Image
									src={spot.photo}
									alt={spot.name}
									fill
									style={{ objectFit: "cover" }}
									sizes="160px"
								/>
							</div>
							<div className="text-lg font-bold text-yellow-900 text-center group-hover:text-amber-700 transition-colors">
								{spot.name}
							</div>
							<div className="text-sm text-gray-700 text-center mt-1 group-hover:text-yellow-800 transition-colors">
								{spot.location}
							</div>
							<div className="text-sm text-gray-600 text-center mt-2">
								{spot.desc}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
