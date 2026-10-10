<template>
  <section id="about" class="relative pt-20 pb-12 px-4 sm:px-6 md:px-12 bg-transparent overflow-hidden min-h-screen flex flex-col justify-center items-center">
    <div class="absolute top-1/2 left-10 w-140 h-140 bg-blue-600/20 rounded-full blur-[150px] pointer-events-none"></div>
    <div class="absolute bottom-10 right-10 w-140 h-140 bg-violet-600/20 rounded-full blur-[150px] pointer-events-none"></div>

    <div v-appear class="max-w-375 w-full mx-auto relative z-10">
      <div class="flex flex-col gap-8 xl:gap-12 items-center">
        <div class="text-center w-full">
          <h2 class="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tighter text-white leading-none mb-4">
            About <span class="bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-violet-400 to-violet-500 drop-shadow-md">Me.</span>
          </h2>
          <p class="text-gray-300 text-base md:text-lg xl:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Get to know more about my background, academics, and personal profile details.
          </p>
        </div>

        <div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-10">
          <div class="group relative bg-white border-2 border-violet-400 rounded-3xl p-6 xl:p-8 shadow-[0_20px_40px_rgba(0,0,0,0.5)] smooth-card hover:shadow-[0_25px_50px_rgba(139,92,246,0.3)] flex flex-col justify-between mt-6 lg:mt-0">
            <div class="absolute -top-8 left-6 w-36 xl:w-44 h-8 bg-white border-t-2 border-x-2 border-violet-400 rounded-t-2xl z-0 transition-colors duration-300"></div>
            <div class="absolute top-0.5 left-6.5 w-35 xl:w-43 h-1 bg-white z-10 transition-colors duration-300"></div>

            <div class="relative z-20">
              <h3 class="text-xl xl:text-2xl font-extrabold text-[#172554] mb-4 tracking-tight">Personal Details</h3>
              <div class="bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 mb-6 text-sm xl:text-base text-blue-900 flex items-center shadow-sm">
                <span class="mr-3 text-lg xl:text-xl">📁</span>
                <span class="truncate font-medium">/personal/karla-tattao</span>
              </div>
              <div class="bg-slate-50 rounded-2xl p-5 xl:p-6 text-slate-700 text-sm xl:text-base shadow-inner border border-gray-100 space-y-4">
                <p><strong class="text-blue-900 font-bold">Name:</strong> Karla Beatriz T. Tattao</p>
                <p><strong class="text-blue-900 font-bold">Age:</strong> 21</p>
                <p><strong class="text-blue-900 font-bold">Address:</strong> Camasi, Peñablanca, Cagayan</p>
              </div>
            </div>

            <div class="mt-6 pt-4 border-t border-violet-100 flex justify-between items-center text-xs text-violet-500 uppercase tracking-widest font-bold relative z-20">
              <span>Personal</span>
              <span class="text-violet-700">Active</span>
            </div>
          </div>

          <div class="group relative bg-white border-2 border-violet-400 rounded-3xl p-6 xl:p-8 shadow-[0_20px_40px_rgba(0,0,0,0.5)] smooth-card hover:shadow-[0_25px_50px_rgba(139,92,246,0.3)] flex flex-col justify-between mt-8 lg:mt-0">
            <div class="absolute -top-8 left-6 w-36 xl:w-44 h-8 bg-white border-t-2 border-x-2 border-violet-400 rounded-t-2xl z-0 transition-colors duration-300"></div>
            <div class="absolute top-0.5 left-6.5 w-35 xl:w-43 h-1 bg-white z-10 transition-colors duration-300"></div>

            <div class="relative z-20">
              <h3 class="text-xl xl:text-2xl font-extrabold text-[#172554] mb-4 tracking-tight">Education</h3>
              <div class="bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 mb-6 text-sm xl:text-base text-blue-900 flex items-center shadow-sm">
                <span class="mr-3 text-lg xl:text-xl">📁</span>
                <span class="truncate font-medium">/education/university</span>
              </div>
              <div class="bg-slate-50 rounded-2xl p-5 xl:p-6 text-slate-700 text-sm xl:text-base shadow-inner border border-gray-100 space-y-4">
                <p><strong class="text-blue-900 font-bold">Program:</strong> BS Computer Engineering</p>
                <p><strong class="text-blue-900 font-bold">School:</strong> Cagayan State University - Carig Campus</p>
                <p><strong class="text-blue-900 font-bold">Standing:</strong> 4th Year</p>
              </div>
            </div>

            <div class="mt-6 pt-4 border-t border-violet-100 flex justify-between items-center text-xs text-violet-500 uppercase tracking-widest font-bold relative z-20">
              <span>Academics</span>
              <span class="text-violet-700">Active</span>
            </div>
          </div>

          <div class="group relative bg-white border-2 border-violet-400 rounded-3xl p-6 xl:p-8 shadow-[0_20px_40px_rgba(0,0,0,0.5)] smooth-card hover:shadow-[0_25px_50px_rgba(139,92,246,0.3)] flex flex-col justify-between mt-8 lg:mt-0">
            <div class="absolute -top-8 left-6 w-36 xl:w-44 h-8 bg-white border-t-2 border-x-2 border-violet-400 rounded-t-2xl z-0 transition-colors duration-300"></div>
            <div class="absolute top-0.5 left-6.5 w-35 xl:w-43 h-1 bg-white z-10 transition-colors duration-300"></div>

            <div class="relative z-20">
              <h3 class="text-xl xl:text-2xl font-extrabold text-[#172554] mb-4 tracking-tight">Overview</h3>
              <div class="bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 mb-6 text-sm xl:text-base text-blue-900 flex items-center shadow-sm">
                <span class="mr-3 text-lg xl:text-xl">📁</span>
                <span class="truncate font-medium">/about/overview</span>
              </div>
              <div class="bg-slate-50 rounded-2xl p-5 xl:p-6 text-slate-700 text-sm xl:text-base shadow-inner border border-gray-100 leading-relaxed">
                Hello! I am Karla, a passionate and dedicated <strong class="text-blue-900 font-bold">fourth-year computer engineering student</strong>. I specialize in bridging the gap between hardware and software, with interests in microcontroller programming, IoT systems, network architecture, and full-stack development. I thrive on solving complex technical challenges, designing efficient circuits, and building automated systems with real-world applications.
              </div>
            </div>

            <div class="mt-6 pt-4 border-t border-violet-100 flex justify-between items-center text-xs text-violet-500 uppercase tracking-widest font-bold relative z-20">
              <span>Overview</span>
              <span class="text-violet-700">Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>