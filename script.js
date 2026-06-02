const productImages = {

    // Grocery
    "Atta":"atta.jpg",
    "Chawal":"chawal.jpg",
    "Maida":"maida.jpg",
    "Suji":"suji.jpg",
    "Masoor Dal":"masoor-dal.jpg",
    "Moong Dal":"moong-dal.jpg",
    "Chana Dal":"chana-dal.jpg",
    "Rajma":"rajma.jpg",
    "Kabuli Chana":"kabuli-chana.jpg",
    "Mustard Oil":"mustard-oil.jpg",
    "Refined Oil":"refined-oil.jpg",
    "Sugar":"sugar.jpg",
    "Green Tea":"green-tea.jpg",
    "Lipton Tea":"lipton-tea.jpg",
    "Potato":"potato.jpg",
    "Onion":"onion.jpg",

    // Spices
    "Haldi":"haldi.jpg",
    "Mirch Powder":"mirch-powder.jpg",
    "Dhania Powder":"dhania-powder.jpg",
    "Garam Masala":"garam-masala.jpg",
    "Jeera":"jeera.jpg",
    "Ajwain":"ajwain.jpg",
    "Elaichi":"elaichi.jpg",
    "Laung":"laung.jpg",
    "Kali Mirch":"kali-mirch.jpg",
    "Biryani Masala":"biryani-masala.jpg",
    "Meat Masala":"meat-masala.jpg",

    // Snacks
    "Glucose Biscuit":"glucose-biscuit.jpg",
    "Cream Biscuit":"cream-biscuit.jpg",
    "Bakri Biscuit":"bakri-biscuit.jpg",
    "Rusk":"rusk.jpg",
    "Chips":"chips.jpg",
    "Kurkure":"kurkure.jpg",
    "Namkeen":"namkeen.jpg",
    "Popcorn":"popcorn.jpg",
    "Peanuts":"peanuts.jpg",
    "Chocolate":"chocolate.jpg",
    "Candies":"candies.jpg",
    "Toffees":"toffees.jpg",
    "Chewing Gum":"chewing-gum.jpg",

    // Dry Fruits
    "Almonds":"almonds.jpg",
    "Cashews":"cashews.jpg",
    "Raisins":"raisins.jpg",

    // Cold Drinks
    "Coca-Cola":"coca-cola.jpg",
    "Pepsi":"pepsi.jpg",
    "Sprite":"sprite.jpg",
    "Fanta":"fanta.jpg",
    "Mountain Dew":"mountain-dew.jpg",
    "Limca":"limca.jpg",
    "Sting":"sting.jpg",
    "Slice":"slice.jpg",
    "Kawi":"kawi.jpg",
    "Pack Juices":"pack-juice.jpg",

    "Ice Cream Small":"ice-cream.jpg",
    "Ice Cream Medium":"ice-cream.jpg",
    "Ice Cream Large":"ice-cream.jpg",

    // Personal Care
    "Soap":"soap.jpg",
    "Shampoo":"shampoo.jpg",
    "Hair Oil":"hair-oil.jpg",
    "Face Wash":"face-wash.jpg",
    "Toothpaste":"toothpaste.jpg",
    "Toothbrush":"toothbrush.jpg",
    "Deodorant":"deodorant.jpg",
    "Shaving Cream":"shaving-cream.jpg",
    "Razor":"razor.jpg",
    "Hair Gel":"hair-gel.jpg",
    "Sanitary Pads":"sanitary-pads.jpg",
    "Diapers":"diapers.jpg",
    "Baby Wipes":"baby-wipes.jpg",
    "Baby Powder":"baby-powder.jpg",
    "Baby Soap":"baby-soap.jpg",
    "Baby Food":"baby-food.jpg",
    "Surf":"surf.jpg",
    "Detergent Powder":"detergent-powder.jpg",
    "Dishwash Bar":"dishwash-bar.jpg",
    "Dishwash Liquid":"dishwash-liquid.jpg",
    "Floor Cleaner":"floor-cleaner.jpg",
    "Phenyl":"phenyl.jpg",

    // Agriculture
    "Crop Fertilizer (Khad)":"khad.jpg",
    "Animal Feed":"animal-feed.jpg",

    // Special
    "Chicken / Meat":"chicken.jpg"
};
function createCard(name, price = "📞 Contact Store for Price") {

    let image =
        productImages[name] || "chawal.jpg";

    return `
        <div class="product-card">

            <img
                src="images/${image}"
                alt="${name}">

            <h3>${name}</h3>

            <p class="price">
                ${price}
            </p>

            <p class="in-stock">
                ✅ In Stock
            </p><a
href="https://wa.me/919622615467?text=${encodeURIComponent(`Assalamualaikum,

Maine aapki website KHALIFA KARYANA STORE visit ki. Website ka experience achha raha.

Mujhe ${name} ke baare me maloomat chahiye.

Kya ${name} store me available hai?
Aur iska current price kya hai?

Agar is product ki koi dusri variety ya pack size bhi available ho to uski details bhi bata dijiye.

Shukriya.`)}"
target="_blank"
class="whatsapp-product-btn">

📲 Click for Details on WhatsApp

</a>
        </div>
    `;
}

function showCategory(category) {

    const title = document.getElementById("section-title");
    const box = document.getElementById("content-box");

    let html = "";

    if(category === "grocery"){

        title.innerHTML = "🛒 Grocery Essentials";

        html += createCard("Atta");
        html += createCard("Chawal");
        html += createCard("Maida");
        html += createCard("Suji");

        html += createCard("Masoor Dal","₹120/kg");
        html += createCard("Moong Dal","₹120/kg");
        html += createCard("Chana Dal","₹120/kg");
        html += createCard("Rajma","₹120/kg");

        html += createCard("Kabuli Chana");

        html += createCard("Mustard Oil");
        html += createCard("Refined Oil");

        html += createCard("Sugar","₹50/kg");

        html += createCard("Green Tea","₹500/kg");
        html += createCard("Lipton Tea","₹300/kg");

        html += createCard("Potato");
        html += createCard("Onion");
    }

    else if(category === "spices"){

        title.innerHTML = "🧂 Spices & Masala";

        html += createCard("Haldi");
        html += createCard("Mirch Powder");
        html += createCard("Dhania Powder");
        html += createCard("Garam Masala");
        html += createCard("Jeera");
        html += createCard("Ajwain");
        html += createCard("Elaichi");
        html += createCard("Laung");
        html += createCard("Kali Mirch");
        html += createCard("Biryani Masala");
        html += createCard("Meat Masala");
    }

    else if(category === "snacks"){

        title.innerHTML = "🍫 Snacks & Confectionery";

        html += createCard("Glucose Biscuit","₹10");
        html += createCard("Cream Biscuit","₹10");
        html += createCard("Bakri Biscuit","₹25");
        html += createCard("Rusk","₹10");

        html += createCard("Chips","₹5");
        html += createCard("Kurkure","₹5");
        html += createCard("Namkeen","₹5");
        html += createCard("Popcorn","₹5");
        html += createCard("Peanuts","₹5");

        html += createCard("Chocolate","₹5");
        html += createCard("Candies");
        html += createCard("Toffees");
        html += createCard("Chewing Gum","₹1");
    }

    else if(category === "dryfruits"){

        title.innerHTML = "🥜 Dry Fruits & Nuts";

        html += createCard("Almonds");
        html += createCard("Cashews");
        html += createCard("Raisins");
    }

    else if(category === "colddrinks"){

        title.innerHTML = "🥤 Cold Drinks, Ice Cream & Juices";

        html += createCard("Coca-Cola","₹20 / ₹50 / ₹100");
        html += createCard("Pepsi","₹20 / ₹30 / ₹50 / ₹100");
        html += createCard("Sprite","₹20");
        html += createCard("Mountain Dew","₹20 / ₹35 / ₹65 / ₹100");
        html += createCard("Limca","₹20");
        html += createCard("Sting","₹20");
        html += createCard("Slice","₹20 / ₹35 / ₹65 / ₹100");
        html += createCard("Kawi","₹20");
        html += createCard("Pack Juices","₹10 / ₹20");

        html += createCard("Ice Cream Small","₹5");
        html += createCard("Ice Cream Medium","₹10");
        html += createCard("Ice Cream Large","₹20");
    }

    else if(category === "personalcare"){

        title.innerHTML = "🧴 Personal, Baby & Home Care";

        html += createCard("Soap");
        html += createCard("Shampoo");
        html += createCard("Hair Oil");
        html += createCard("Face Wash");
        html += createCard("Toothpaste");
        html += createCard("Toothbrush");
        html += createCard("Deodorant");
        html += createCard("Shaving Cream");
        html += createCard("Razor");
        html += createCard("Hair Gel");
        html += createCard("Sanitary Pads");
        html += createCard("Diapers");
        html += createCard("Baby Wipes");
        html += createCard("Baby Powder");
        html += createCard("Baby Soap");
        html += createCard("Baby Food");
        html += createCard("Surf");
        html += createCard("Detergent Powder");
        html += createCard("Dishwash Bar");
        html += createCard("Dishwash Liquid");
        html += createCard("Floor Cleaner");
        html += createCard("Phenyl");
    }

    else if(category === "agriculture"){

        title.innerHTML = "🌾 Agriculture & Animal Products";

        html += createCard("Crop Fertilizer (Khad)");
        html += createCard("Animal Feed");
    }

    else if(category === "special"){

        title.innerHTML = "⭐ Special / Seasonal Items";

        html += createCard("Chicken / Meat");
    }else if(category === "chakki"){

    title.innerHTML =
    "🌾 Atta & Dal Chakki Service";

    html = `

    <div class="chakki-section">

        <video
        class="chakki-video"
        autoplay
        muted
        loop
        controls
        playsinline>

            <source
            src="videos/chakki.mp4"
            type="video/mp4">

        </video>

        <h2>
        Fresh Grinding Available
        </h2>

        <div class="chakki-price">

            <h3>
            💰 Wheat (Gehu) Grinding
            </h3>

            <p>
            ₹4 per Kg
            </p>

            <h3>
            💰 Dal Grinding
            </h3>

            <p>
            ₹3 per Kg
            </p>

        </div>

        <p>
        📞 Contact: 9622615467
        </p>

        <a
        href="https://wa.me/919622615467?text=${encodeURIComponent(`Assalamualaikum,

Maine aapki website par Atta & Dal Chakki Service dekhi.

Mujhe chakki service ke baare me maloomat chahiye.

Gehu pisai aur Dal pisai ki timing aur details bata dijiye.

Shukriya.`)}"
        target="_blank"
        class="whatsapp-product-btn">

        📲 Click for Details on WhatsApp

        </a>

    </div>
    `;
}
    box.innerHTML = html;
}

function searchProducts(){

    let input = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    let cards = document.getElementsByClassName("product-card");

    for(let i = 0; i < cards.length; i++){

        let text = cards[i].innerText.toLowerCase();

        if(text.includes(input)){
            cards[i].style.display = "block";
        }else{
            cards[i].style.display = "none";
        }
    }
}
function sendFeedback(){

    let rating =
    document.getElementById("rating").value;

    let name =
    document.getElementById("customerName").value;

    let feedback =
    document.getElementById("feedbackText").value;

    let message =

`Assalamualaikum,

Customer Feedback

Name: ${name}

Rating: ${rating}

Feedback:
${feedback}`;

    window.open(
    `https://wa.me/919622615467?text=${encodeURIComponent(message)}`,
    "_blank"
    );
}