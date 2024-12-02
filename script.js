document.addEventListener('DOMContentLoaded', () => {
    AOS.init();

    // تفعيل القائمة المنسدلة على الأجهزة المحمولة
    const navToggle = document.querySelector('.nav-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    navToggle.addEventListener('click', () => {
        mobileNav.classList.toggle('is-active');
    });

    // إزالة الكود غير المطلوب

    window.addEventListener('scroll', function() {
        let sections = document.querySelectorAll('section');
        let navLinks = document.querySelectorAll('nav a');
        sections.forEach((section, index) => {
            let rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLinks[index].classList.add('active');
            }
        });
    });

});
  // Simulate Video Play
  const playButton = document.querySelector('.play-button');
  playButton.addEventListener('click', () => {
    alert('Playing the video!');
  });
  
    // Count-Up Animation
// Count-Up Animation
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
  
    const animateCount = (el) => {
      const countTo = parseInt(el.getAttribute('data-count'));
      const increment = countTo / 200;
  
      let count = 0;
      const updateCount = () => {
        count += increment;
        if (count >= countTo) {
          el.innerText = countTo;
        } else {
          el.innerText = Math.ceil(count);
          requestAnimationFrame(updateCount);
        }
      };
  
      updateCount();
    };
  
    counters.forEach((counter) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(counter);
          }
        });
      });
  
      observer.observe(counter);
    });
  });
  
  function switchLanguage(language) {
    const translations = {
        en: {
            title: "Support Palestine",
            description: "Join us in providing vital humanitarian support for the people of Palestine.",
            donors: "Number of Donors",
            donors_count: "5000",
            funds: "Funds Raised",
            funds_raised: "$2,000,000",
            donate_button: "Donate Now"
        },
        ar: {
            title: "دعم فلسطين",
            description: "انضم إلينا لتقديم الدعم الإنساني للشعب الفلسطيني.",
            donors: "عدد المتبرعين",
            donors_count: "5000",
            funds: "الأموال المجموعة",
            funds_raised: "2,000,000$",
            donate_button: "تبرع الآن"
        }
    };

    const selectedLang = translations[language];
    document.getElementById("title").innerText = selectedLang.title;
    document.getElementById("description").innerText = selectedLang.description;
    document.getElementById("donors").innerText = selectedLang.donors;
    document.getElementById("donors-count").innerText = selectedLang.donors_count;
    document.getElementById("funds").innerText = selectedLang.funds;
    document.getElementById("funds-raised").innerText = selectedLang.funds_raised;
    document.getElementById("donate-button").innerText = selectedLang.donate_button;

    // تحديث زر تغيير اللغة
    document.querySelector(".lang-btn:nth-child(1)").innerText = (language === 'en') ? 'English' : 'الإنجليزية';
    document.querySelector(".lang-btn:nth-child(2)").innerText = (language === 'ar') ? 'عربي' : 'Arabic';
}

// تفعيل اللغة الافتراضية عند تحميل الصفحة
window.onload = function() {
    switchLanguage('en'); // اللغة الافتراضية هي الإنجليزية
}

// التأثيرات لتغيير العدادات
const donorsCount = document.getElementById("donors-count");
const fundsRaised = document.getElementById("funds-raised");

let donorNumber = 0;
let fundNumber = 0;

const donorInterval = setInterval(() => {
    if (donorNumber < 5000) {
        donorNumber += 50;
        donorsCount.innerText = donorNumber;
    } else {
        clearInterval(donorInterval);
    }
}, 100);

const fundInterval = setInterval(() => {
    if (fundNumber < 2000000) {
        fundNumber += 10000;
        fundsRaised.innerText = "$" + fundNumber;
    } else {
        clearInterval(fundInterval);
    }
}, 100);

window.addEventListener('DOMContentLoaded', () => {
    const defaultCategory = 'dresses'; // الفئة الافتراضية
    document.getElementById('category-title').textContent = 'Dresses'; // عنوان الفئة الافتراضية
  
    // عرض الكاردات الافتراضية فقط
    document.querySelectorAll('.product-card').forEach(card => {
      card.style.display = card.dataset.category === defaultCategory ? 'block' : 'none';
    });
  
    // تحديد الفئة الافتراضية كـ active
    document.querySelector(`[data-category="${defaultCategory}"]`).classList.add('active');
  });
  
  // عند النقر على الفئات
  document.querySelectorAll('.category-nav a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
  
      // إزالة الفئة النشطة من جميع الروابط
      document.querySelectorAll('.category-nav a').forEach(nav => nav.classList.remove('active'));
  
      // إضافة الفئة النشطة إلى الرابط المحدد
      this.classList.add('active');
  
      // تحديث عنوان القسم
      const category = this.dataset.category;
      document.getElementById('category-title').textContent = this.textContent;
  
      // عرض الكاردات المتعلقة بالفئة المحددة فقط
      document.querySelectorAll('.product-card').forEach(card => {
        card.style.display = card.dataset.category === category ? 'block' : 'none';
      });
    });
  });
  var swiper = new Swiper(".review-slider", {
    spaceBetween :20,
    loop:true,
    autoplay:{
        delay:4000
    },
    breakpoints:{
        640:{
            slidesPerView:1
        },
        768:{
            slidesPerView:1
        },
        1024:{
            slidesPerView:1
        }
    }
});
var swiper = new Swiper(".coll-slider", {
  spaceBetween :20,
  loop:true,
  autoplay:{
      delay:4000
  },
  breakpoints:{
      640:{
          slidesPerView:1
      },
      768:{
          slidesPerView:2
      },
      1024:{
          slidesPerView:3
      }
  }
});
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});