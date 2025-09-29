import React, { useState, useMemo } from 'react';
import { LineChart, Line, Area, ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Menu, X, ChevronDown, Filter } from 'lucide-react';
const GambaranUmum = () => {
  return (
    <div className="prose max-w-none">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg mb-8 border-l-4 border-blue-600">
        <h2 className="text-3xl font-bold text-gray-800 mt-0 mb-4">
          Memahami Arah Kebijakan Energi Indonesia: PP No. 40 Tahun 2025 tentang Kebijakan Energi Nasional
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Peraturan Pemerintah Nomor 40 Tahun 2025 tentang Kebijakan Energi Nasional (KEN) merupakan dokumen strategis yang menetapkan arah pengelolaan energi nasional hingga tahun 2060. PP ini ditandatangani oleh Presiden Republik Indonesia pada tanggal 15 September 2025 di Jakarta, sebagai landasan hukum dalam mewujudkan ketahanan energi, kemandirian energi, dan dekarbonisasi sektor energi menuju Net Zero Emission (NZE) tahun 2060.
        </p>
      </div>

      {/* 5W+1H Framework */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* WHAT */}
        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500">
          <h3 className="text-xl font-bold text-green-700 mt-0 mb-3 flex items-center">
            <span className="bg-green-100 px-3 py-1 rounded-full mr-3">APA</span>
            Substansi Kebijakan
          </h3>
          <p className="text-gray-700 mb-3">
            PP No. 40/2025 mengatur tentang pengelolaan energi nasional yang mencakup penyediaan, pemanfaatan, pengusahaan, cadangan energi, dan konservasi energi. Kebijakan ini menetapkan sasaran konkret untuk:
          </p>
          <ul className="text-gray-700 space-y-2">
            <li>• Bauran Energi Baru dan Terbarukan (EBT) mencapai 19-23% pada 2030, dan 70-72% pada 2060</li>
            <li>• Penurunan emisi GRK sektor energi dengan puncak emisi pada 2035 dan mencapai NZE (129 MtCO₂e) pada 2060</li>
            <li>• Peningkatan konsumsi energi final per kapita dan elektrifikasi secara bertahap</li>
            <li>• Pengurangan ketergantungan terhadap energi fosil dengan target spesifik untuk minyak bumi dan batubara</li>
          </ul>
        </div>

        {/* WHY */}
        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
          <h3 className="text-xl font-bold text-blue-700 mt-0 mb-3 flex items-center">
            <span className="bg-blue-100 px-3 py-1 rounded-full mr-3">MENGAPA</span>
            Urgensi Kebijakan
          </h3>
          <p className="text-gray-700 mb-3">
            Kebijakan Energi Nasional ini disusun untuk menjawab tantangan strategis Indonesia, yaitu:
          </p>
          <ul className="text-gray-700 space-y-2">
            <li>• <strong>Ketahanan Energi:</strong> Memastikan ketersediaan energi yang andal untuk mendukung pembangunan ekonomi nasional</li>
            <li>• <strong>Komitmen Iklim Global:</strong> Memenuhi komitmen Indonesia dalam Persetujuan Paris untuk menurunkan emisi gas rumah kaca</li>
            <li>• <strong>Transisi Energi:</strong> Mengalihkan ketergantungan dari energi fosil menuju energi bersih secara terencana dan berkelanjutan</li>
            <li>• <strong>Kemandirian Energi:</strong> Mengurangi ketergantungan impor dan mengoptimalkan potensi energi dalam negeri</li>
          </ul>
        </div>

        {/* WHO */}
        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-500">
          <h3 className="text-xl font-bold text-purple-700 mt-0 mb-3 flex items-center">
            <span className="bg-purple-100 px-3 py-1 rounded-full mr-3">SIAPA</span>
            Pemangku Kepentingan
          </h3>
          <p className="text-gray-700 mb-3">
            Implementasi KEN melibatkan berbagai pihak dengan peran masing-masing:
          </p>
          <ul className="text-gray-700 space-y-2">
            <li>• <strong>Pemerintah Pusat:</strong> Perumus kebijakan, koordinator pelaksanaan, dan pengawas implementasi KEN</li>
            <li>• <strong>Pemerintah Daerah:</strong> Pelaksana kebijakan di tingkat regional, penyusun rencana energi daerah yang selaras dengan KEN</li>
            <li>• <strong>BUMN/BUMD:</strong> Pelaksana utama pengusahaan energi dan penyedia infrastruktur energi</li>
            <li>• <strong>Sektor Swasta:</strong> Investor dan operator dalam pengembangan proyek energi, khususnya EBT</li>
            <li>• <strong>Masyarakat:</strong> Konsumen energi yang didorong untuk berpartisipasi dalam konservasi dan efisiensi energi</li>
          </ul>
        </div>

        {/* WHEN */}
        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-500">
          <h3 className="text-xl font-bold text-orange-700 mt-0 mb-3 flex items-center">
            <span className="bg-orange-100 px-3 py-1 rounded-full mr-3">KAPAN</span>
            Kerangka Waktu
          </h3>
          <p className="text-gray-700 mb-3">
            KEN menetapkan periode pelaksanaan jangka panjang dengan milestone kunci:
          </p>
          <ul className="text-gray-700 space-y-2">
            <li>• <strong>2025:</strong> PP No. 40/2025 ditandatangani dan mulai berlaku sebagai pedoman kebijakan energi nasional</li>
            <li>• <strong>2030:</strong> Target awal bauran EBT 19-23% dan emisi GRK 1.017-1.184 MtCO₂e</li>
            <li>• <strong>2035:</strong> Puncak emisi GRK sektor energi (peaking emissions)</li>
            <li>• <strong>2040-2050:</strong> Fase akselerasi transisi energi dengan peningkatan bauran EBT hingga 53-55%</li>
            <li>• <strong>2060:</strong> Target akhir NZE dengan emisi 129 MtCO₂e dan bauran EBT 70-72%</li>
            <li>• <strong>Evaluasi Berkala:</strong> KEN dapat ditinjau ulang setiap 5 tahun atau lebih cepat jika terdapat perubahan kondisi strategis</li>
          </ul>
        </div>

        {/* WHERE */}
        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-red-500">
          <h3 className="text-xl font-bold text-red-700 mt-0 mb-3 flex items-center">
            <span className="bg-red-100 px-3 py-1 rounded-full mr-3">DI MANA</span>
            Cakupan Wilayah
          </h3>
          <p className="text-gray-700 mb-3">
            Kebijakan ini berlaku untuk seluruh wilayah Negara Kesatuan Republik Indonesia dengan pendekatan:
          </p>
          <ul className="text-gray-700 space-y-2">
            <li>• <strong>Nasional:</strong> Menetapkan target dan arah kebijakan energi untuk Indonesia secara keseluruhan</li>
            <li>• <strong>Regional:</strong> Mendorong interkoneksi sistem energi antar daerah dan pulau untuk efisiensi dan keandalan</li>
            <li>• <strong>Lokal:</strong> Mengutamakan pemanfaatan sumber energi setempat dan pemerataan akses energi</li>
            <li>• <strong>Kawasan Perbatasan:</strong> Kerja sama pengembangan energi dengan negara tetangga untuk ketahanan energi kawasan</li>
            <li>• <strong>Lintas Negara:</strong> Membuka kemungkinan ekspor-impor energi termasuk listrik untuk keamanan pasokan jangka panjang</li>
          </ul>
        </div>

        {/* HOW */}
        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-teal-500">
          <h3 className="text-xl font-bold text-teal-700 mt-0 mb-3 flex items-center">
            <span className="bg-teal-100 px-3 py-1 rounded-full mr-3">BAGAIMANA</span>
            Strategi Pelaksanaan
          </h3>
          <p className="text-gray-700 mb-3">
            Pencapaian target KEN dilaksanakan melalui strategi komprehensif:
          </p>
          <ul className="text-gray-700 space-y-2">
            <li>• <strong>Transisi Bertahap:</strong> Pengembangan energi rendah karbon secara rasional, terukur, dan berkelanjutan</li>
            <li>• <strong>Prioritas EBT:</strong> Memaksimalkan pemanfaatan energi terbarukan dan meminimalkan energi fosil</li>
            <li>• <strong>Teknologi Rendah Karbon:</strong> Penerapan CCUS, carbon capture, dan teknologi efisiensi energi</li>
            <li>• <strong>Konservasi Energi:</strong> Wajib dilaksanakan oleh semua pemangku kepentingan dengan standar efisiensi energi</li>
            <li>• <strong>Cadangan Energi:</strong> Penyediaan cadangan strategis, cadangan penyangga, dan cadangan operasional</li>
            <li>• <strong>Instrumen Ekonomi:</strong> Insentif, pajak karbon, dan pembayaran berbasis kinerja penurunan emisi</li>
          </ul>
        </div>
      </div>

      {/* Key Highlights for Local Government */}
      <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-8 rounded-lg mb-8 border-l-4 border-amber-600">
        <h3 className="text-2xl font-bold text-gray-800 mt-0 mb-4">
          Pentingnya Dashboard KEN bagi Pemerintah Daerah
        </h3>
        <p className="text-gray-700 mb-4">
          Dashboard ini dirancang khusus untuk mendukung Pemerintah Daerah dalam mengimplementasikan Kebijakan Energi Nasional di tingkat regional. Berikut adalah manfaat strategis yang dapat diperoleh:
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-bold text-amber-700 mb-2">1. Acuan Perencanaan Energi Daerah</h4>
            <p className="text-sm text-gray-700">
              Dashboard menyediakan visualisasi target nasional yang menjadi rujukan dalam menyusun Rencana Umum Energi Daerah (RUED) dan Rencana Pembangunan Jangka Menengah Daerah (RPJMD) sesuai amanat Pasal 4 PP No. 40/2025.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-bold text-amber-700 mb-2">2. Monitoring dan Evaluasi Kinerja</h4>
            <p className="text-sm text-gray-700">
              Memudahkan pemantauan capaian target energi daerah terhadap target nasional secara berkala, mendukung fungsi pembinaan dan pengawasan sebagaimana Pasal 36 PP No. 40/2025.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-bold text-amber-700 mb-2">3. Pendukung Pengambilan Keputusan</h4>
            <p className="text-sm text-gray-700">
              Menyajikan data komparatif antar periode dan sektor untuk membantu Kepala Daerah dan SKPD terkait dalam merumuskan kebijakan energi daerah yang tepat sasaran dan berbasis data.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-bold text-amber-700 mb-2">4. Transparansi dan Akuntabilitas Publik</h4>
            <p className="text-sm text-gray-700">
              Mewujudkan prinsip transparansi dalam pengusahaan energi (Pasal 32) dengan menyediakan informasi yang mudah diakses oleh seluruh pemangku kepentingan dan masyarakat.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-bold text-amber-700 mb-2">5. Identifikasi Peluang Investasi</h4>
            <p className="text-sm text-gray-700">
              Membantu mengidentifikasi sektor dan jenis energi yang memerlukan pengembangan prioritas, mendukung upaya menarik investasi EBT dan infrastruktur energi di daerah.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-bold text-amber-700 mb-2">6. Koordinasi Lintas Sektor</h4>
            <p className="text-sm text-gray-700">
              Menyediakan basis data bersama untuk koordinasi antara Dinas Energi, Bappeda, Dinas Lingkungan Hidup, dan SKPD lainnya dalam implementasi program energi terintegrasi.
            </p>
          </div>
        </div>
      </div>

      {/* What You Can Find */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mt-0 mb-4">
          Apa yang Dapat Anda Temukan dalam Dashboard Ini?
        </h3>
        <p className="text-gray-700 mb-4">
          Dashboard ini mentransformasikan data dan target yang termuat dalam PP No. 40/2025 menjadi visualisasi interaktif yang mudah dipahami, meliputi:
        </p>
        
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-full mr-4 flex-shrink-0">1</div>
            <div>
              <h4 className="font-bold text-gray-800 mb-1">Pemanfaatan Energi Final</h4>
              <p className="text-gray-700 text-sm">Target konsumsi energi final per sektor (industri, transportasi, komersial, rumah tangga) dan per jenis energi (minyak, gas, batubara, listrik, EBT) dalam juta TOE untuk periode 2030-2060.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-full mr-4 flex-shrink-0">2</div>
            <div>
              <h4 className="font-bold text-gray-800 mb-1">Penyediaan Energi Primer</h4>
              <p className="text-gray-700 text-sm">Proyeksi kebutuhan energi primer nasional dan target intensitas energi primer, mencerminkan efisiensi penggunaan energi terhadap pertumbuhan ekonomi.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-full mr-4 flex-shrink-0">3</div>
            <div>
              <h4 className="font-bold text-gray-800 mb-1">Energi per Kapita</h4>
              <p className="text-gray-700 text-sm">Indikator kesejahteraan energi melalui konsumsi energi final per kapita dan penyediaan energi primer per kapita dalam satuan TOE dan GJ.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-full mr-4 flex-shrink-0">4</div>
            <div>
              <h4 className="font-bold text-gray-800 mb-1">Bauran Energi Baru dan Terbarukan (EBT)</h4>
              <p className="text-gray-700 text-sm">Komposisi dan target kontribusi masing-masing sumber EBT (hidro, surya, angin, biomassa, panas bumi, biogas, nuklir) dalam bauran energi nasional.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-full mr-4 flex-shrink-0">5</div>
            <div>
              <h4 className="font-bold text-gray-800 mb-1">Penurunan Emisi Gas Rumah Kaca (GRK)</h4>
              <p className="text-gray-700 text-sm">Lintasan penurunan emisi sektor energi, target pengurangan energi fosil, emisi per kapita, dan intensitas emisi energi primer menuju NZE 2060.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-lg mb-8 border-l-4 border-green-600">
        <h3 className="text-2xl font-bold text-gray-800 mt-0 mb-4">
          Fitur Utama Dashboard
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-bold text-green-700 mb-2">📊 Visualisasi Interaktif</h4>
            <p className="text-sm text-gray-700">
              Grafik dinamis dengan rentang proyeksi (minimum, rata-rata, maksimum) untuk memahami ketidakpastian dan skenario perencanaan.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-bold text-green-700 mb-2">🔍 Perbandingan Multi-Dimensi</h4>
            <p className="text-sm text-gray-700">
              Bandingkan target antar periode waktu (2030 vs 2060), antar sektor, atau antar jenis energi untuk analisis mendalam.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-bold text-green-700 mb-2">⚙️ Kontrol Tampilan Fleksibel</h4>
            <p className="text-sm text-gray-700">
              Filter dan toggle untuk menyesuaikan tampilan data sesuai kebutuhan analisis spesifik Anda.
            </p>
          </div>
        </div>
      </div>

      {/* Key Articles Summary */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mt-0 mb-4">
          Ringkasan Pasal-Pasal Penting PP No. 40/2025
        </h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-blue-700 mb-2">Bab I: Ketentuan Umum (Pasal 1-5)</h4>
            <p className="text-gray-700 text-sm mb-2">
              Mendefinisikan terminologi kunci (energi, EBT, NZE, konservasi, intensitas energi, dll.) dan menetapkan tujuan KEN untuk memberi arah pengelolaan energi yang berkeadilan, berkelanjutan, efisien, dan berwawasan lingkungan. KEN berlaku hingga 2060 dan dapat ditinjau ulang setiap 5 tahun.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-blue-700 mb-2">Bab II: Tujuan dan Sasaran (Pasal 6-13)</h4>
            <p className="text-gray-700 text-sm mb-2">
              Menetapkan sasaran utama: ketahanan energi, dekarbonisasi menuju NZE 2060, peningkatan nilai tambah dalam negeri, dan penyerapan tenaga kerja. Pasal 11-13 merinci target spesifik untuk konsumsi energi per kapita, bauran EBT (19-23% di 2030, 70-72% di 2060), dan pengurangan emisi GRK (puncak emisi 2035, NZE 129 MtCO₂e di 2060).
            </p>
          </div>

          <div>
            <h4 className="font-bold text-blue-700 mb-2">Bab III: Kebijakan (Pasal 14-30)</h4>
            <p className="text-gray-700 text-sm mb-2">
              Menguraikan strategi ketersediaan energi (Pasal 15), prioritas pemanfaatan EBT (Pasal 16-17), sistem cadangan energi tiga lapis (strategis, penyangga, operasional - Pasal 18-21), interkoneksi sistem listrik (Pasal 22-23), dan kebijakan ekspor-impor energi (Pasal 25-29). Penerimaan negara dari sektor energi dapat dimanfaatkan untuk mendukung ketahanan energi dan pengembangan EBT (Pasal 30).
            </p>
          </div>

          <div>
            <h4 className="font-bold text-blue-700 mb-2">Bab IV: Pengusahaan Energi (Pasal 31-36)</h4>
            <p className="text-gray-700 text-sm mb-2">
              Mengatur mekanisme pengusahaan energi dari hulu hingga hilir dengan prinsip efisiensi, transparansi, persaingan sehat, dan perlindungan lingkungan. Wajib menggunakan teknologi efisien dan rendah karbon, serta memprioritaskan produk dan tenaga kerja dalam negeri. Pemerintah pusat dan daerah berperan dalam pembinaan, pengawasan, dan pemberian insentif.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-blue-700 mb-2">Bab V: Konservasi Energi (Pasal 37-40)</h4>
            <p className="text-gray-700 text-sm mb-2">
              Mewajibkan konservasi energi bagi semua pihak (pemerintah, penyedia, dan pengguna energi) melalui pengendalian produksi dan konsumsi, efisiensi, dan teknologi rendah karbon. Penggunaan energi final wajib memenuhi standar efisiensi dan mendukung target penurunan emisi. Pemerintah mendorong penerapan melalui kampanye, insentif, standardisasi, sertifikasi, dan audit energi.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-lg shadow-lg text-center">
        <h3 className="text-2xl font-bold mt-0 mb-4">
          Mari Eksplorasi Target Energi Nasional
        </h3>
        <p className="text-lg mb-6 leading-relaxed">
          Gunakan menu navigasi untuk menjelajahi visualisasi data target KEN dan memahami prioritas kebijakan energi Indonesia di masa depan. Dashboard ini dirancang untuk mendukung perencanaan, monitoring, dan pengambilan keputusan berbasis data di tingkat daerah.
        </p>
        <p className="text-sm opacity-90">
          Dashboard ini merupakan interpretasi visual dari PP No. 40/2025 dan tidak menggantikan rujukan hukum resmi. Untuk keperluan legal dan formal, silakan merujuk pada naskah resmi Peraturan Pemerintah.
        </p>
      </div>
    </div>
  );
};
const EnergyDashboard = () => {
  const [activeMenu, setActiveMenu] = useState('gambaran-umum');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCharts, setSelectedCharts] = useState({});

  // Fixed and properly structured data
  const staticData = useMemo(() => {
    return {
      'final-energy-sector': [
        { 
          id: 'final', 
          name: 'Energi Final Total', 
          color: '#684d7c',
          data: [
            { year: 2030, min: 255.1, mean: 277.05, max: 299 },
            { year: 2040, min: 303.9, mean: 331.4, max: 358.9 },
            { year: 2050, min: 354.6, mean: 384.65, max: 414.7 },
            { year: 2060, min: 378.5, mean: 405.65, max: 432.8 }
          ]
        },
        { 
          id: 'industri', 
          name: 'Industri', 
          color: '#2d5a2d',
          data: [
            { year: 2030, min: 127.9, mean: 140.65, max: 153.4 },
            { year: 2040, min: 168.9, mean: 182.75, max: 196.6 },
            { year: 2050, min: 215.4, mean: 233.7, max: 252 },
            { year: 2060, min: 246.7, mean: 260.35, max: 274 }
          ]
        },
        { 
          id: 'transportasi', 
          name: 'Transportasi', 
          color: '#b8860b',
          data: [
            { year: 2030, min: 127.9, mean: 140.65, max: 153.4 },
            { year: 2040, min: 168.9, mean: 182.75, max: 196.6 },
            { year: 2050, min: 215.4, mean: 233.7, max: 252 },
            { year: 2060, min: 246.7, mean: 260.35, max: 274 }
          ]
        },
        { 
          id: 'komersial', 
          name: 'Komersial', 
          color: '#8b2635',
          data: [
            { year: 2030, min: 11.2, mean: 13.4, max: 15.6 },
            { year: 2040, min: 14.8, mean: 17.85, max: 20.9 },
            { year: 2050, min: 18.4, mean: 22, max: 25.6 },
            { year: 2060, min: 20.8, mean: 24, max: 27.2 }
          ]
        },
        { 
          id: 'rumahtangga', 
          name: 'Rumah Tangga', 
          color: '#2f4f4f',
          data: [
            { year: 2030, min: 29, mean: 31.65, max: 34.3 },
            { year: 2040, min: 34.3, mean: 39.45, max: 44.6 },
            { year: 2050, min: 41.2, mean: 44.05, max: 46.9 },
            { year: 2060, min: 46.3, mean: 49, max: 51.7 }
          ]
        }
      ],
      'final-energy-source': [
        { 
          id: 'final2', 
          name: 'Energi Final Total', 
          color: '#684d7c',
          data: [
            { year: 2030, min: 255.1, mean: 277.05, max: 299 },
            { year: 2040, min: 303.9, mean: 331.4, max: 358.9 },
            { year: 2050, min: 354.6, mean: 384.65, max: 414.7 },
            { year: 2060, min: 378.5, mean: 405.65, max: 432.8 }
          ]
        },
        { 
          id: 'surya', 
          name: 'Surya', 
          color: '#2d5a2d',
          data: [
            { year: 2030, min: 1.2, mean: 1.35, max: 1.5 },
            { year: 2040, min: 1.8, mean: 1.85, max: 1.9 },
            { year: 2050, min: 4.3, mean: 4.4, max: 4.5 },
            { year: 2060, min: 11.6, mean: 12.15, max: 12.7 }
          ]
        },
        { 
          id: 'biomassa', 
          name: 'Biomassa', 
          color: '#b8860b',
          data: [
            { year: 2030, min: 15.8, mean: 19.45, max: 23.1 },
            { year: 2040, min: 21.9, mean: 23.3, max: 24.7 },
            { year: 2050, min: 30.3, mean: 32.65, max: 35 },
            { year: 2060, min: 67.5, mean: 69.7, max: 71.9 }
          ]
        },
        { 
          id: 'biogas', 
          name: 'Biogas', 
          color: '#8b2635',
          data: [
            { year: 2030, min: 0.0484, mean: 0.05625, max: 0.0641 },
            { year: 2040, min: 0.0875, mean: 0.10285, max: 0.1182 },
            { year: 2050, min: 0.1584, mean: 0.17955, max: 0.2007 },
            { year: 2060, min: 0.2867, mean: 0.3325, max: 0.3783 }
          ]
        },
        { 
          id: 'nabati', 
          name: 'Nabati', 
          color: '#2f4f4f',
          data: [
            { year: 2030, min: 18.7, mean: 20.7, max: 22.7 },
            { year: 2040, min: 21.9, mean: 23.55, max: 25.2 },
            { year: 2050, min: 18.7, mean: 20.4, max: 22.1 },
            { year: 2060, min: 13.6, mean: 16.75, max: 19.9 }
          ]
        },
        { 
          id: 'hidrogen', 
          name: 'Hidrogen', 
          color: '#1e6091',
          data: [
            { year: 2030, min: 0.0007, mean: 0.00105, max: 0.0014 },
            { year: 2040, min: 0.0054, mean: 0.0059, max: 0.0064 },
            { year: 2050, min: 0.0204, mean: 0.0218, max: 0.0232 },
            { year: 2060, min: 0.0314, mean: 0.0334, max: 0.0354 }
          ]
        },
        { 
          id: 'amonia', 
          name: 'Amonia', 
          color: '#7f5a89',
          data: [
            { year: 2030, min: 0.0024, mean: 0.00265, max: 0.0029 },
            { year: 2040, min: 1, mean: 1.1, max: 1.2 },
            { year: 2050, min: 3.5, mean: 3.9, max: 4.3 },
            { year: 2060, min: 3.5, mean: 5.5, max: 7.5 }
          ]
        },
        { 
          id: 'de', 
          name: 'Dimethyl Ether', 
          color: '#a6854b',
          data: [
            { year: 2030, min: 0, mean: 0.3, max: 0.6 },
            { year: 2040, min: 3, mean: 3.3, max: 3.6},
            { year: 2050, min: 3, mean: 3.3, max: 3.6 },
            { year: 2060, min: 3, mean: 3.3, max: 3.6 }
          ]
        },
        { 
          id: 'minyak', 
          name: 'Minyak', 
          color: '#394f49',
          data: [
            { year: 2030, min: 75.3, mean: 78.7, max: 82.1 },
            { year: 2040, min: 64.3, mean: 68.9, max: 73.5},
            { year: 2050, min: 45.8, mean: 50.25, max: 54.7},
            { year: 2060, min: 22.8, mean: 27.4, max: 32 }
          ]
        },
        { 
          id: 'gas', 
          name: 'Gas Bumi', 
          color: '#00798c',
          data: [
            { year: 2030, min: 18.8, mean: 19.45, max: 20.1 },
            { year: 2040, min: 24.9, mean: 26.1, max: 27.3},
            { year: 2050, min: 40.4, mean: 43.9, max: 47.4},
            { year: 2060, min: 56.6, mean: 63.85, max: 71.1 }
          ]
        },
        { 
          id: 'lpg', 
          name: 'LPG', 
          color: '#8b5e83',
          data: [
            { year: 2030, min: 11, mean: 11.1, max: 11.2 },
            { year: 2040, min: 2.8, mean: 2.9, max: 3},
            { year: 2050, min: 1, mean: 1, max: 1},
            { year: 2060, min: 0.8, mean: 0.85, max: 0.9 }
          ]
        },
        { 
          id: 'batubara', 
          name: 'Batubara', 
          color: '#b09e6f',
          data: [
            { year: 2030, min: 67.2, mean: 67.95, max: 68.7 },
            { year: 2040, min: 83.3, mean: 84.3, max: 85.3},
            { year: 2050, min: 80.3, mean: 81.05, max: 81.8},
            { year: 2060, min: 25.3, mean: 31.95, max: 38.6 }
          ]
        },
        { 
          id: 'listrikwocaptive', 
          name: 'Listrik (tanpa Captive Power)', 
          color: '#6d2035',
          data: [
            { year: 2030, min: 46.8, mean: 58.05, max: 69.3 },
            { year: 2040, min: 73.5, mean: 90.1, max: 106.7},
            { year: 2050, min: 106.6, mean: 121.8, max: 137},
            { year: 2060, min: 128.8, mean: 140.45, max: 152.1 }
          ]
        },
        { 
          id: 'listrikwcaptive', 
          name: 'Listrik (dengan Captive Power)', 
          color: '#5e3c27',
          data: [
            { year: 2030, min: 60.1, mean: 72.3, max: 84.5 },
            { year: 2040, min: 91.5, mean: 111.85, max: 132.2},
            { year: 2050, min: 129.2, mean: 151.7, max: 174.2},
            { year: 2060, min: 155.9, mean: 178.9, max: 201.9 }
          ]
        }
      ],
      'primary-energy': [
        { 
          id: 'primary-energy', 
          name: 'Energi Primer', 
          color: '#2c2c2c',
          data: [
            { year: 2030, min: 368, mean: 411, max: 454 },
            { year: 2040, min: 468, mean: 532, max: 596 },
            { year: 2050, min: 595, mean: 653.5, max: 712 },
            { year: 2060, min: 665, mean: 720, max: 775 }
          ]
        }
      ],
      'energy-intensity': [
        {
          id: 'energy-intensity', 
          name: 'Intensitas Energi', 
          color: '#5e3c27',
          data: [
            { year: 2030, min: 306.3, mean: 329.05, max: 351.8 },
            { year: 2040, min: 205.1, mean: 212.7, max: 220.3 },
            { year: 2050, min: 151.3, mean: 154.35, max: 157.4 },
            { year: 2060, min: 96.1, mean: 105.05, max: 114 }
          ]
        }
      ],
      'bauran-energi': [
        {
          id: 'bauran-energi', 
          name: 'Bauran Energi', 
          color: '#6d2035',
          data: [
            { year: 2030, min: 19.0, mean: 21, max: 23 },
            { year: 2040, min: 36, mean: 38, max: 40 },
            { year: 2050, min: 53, mean: 54, max: 55 },
            { year: 2060, min: 70, mean: 71, max: 72 }
          ]
        }
      ],
      'energy-per-capita': [
        { 
          id: 'pemanfaatan-capita', 
          name: 'Pemanfaatan Energi Final per Kapita', 
          color: '#684d7c',
          data: [
            { year: 2030, min: 0.9, mean: 0.95, max: 1.0 },
            { year: 2040, min: 1.0, mean: 1.05, max: 1.1 },
            { year: 2050, min: 1.0, mean: 1.1, max: 1.2 },
            { year: 2060, min: 1.1, mean: 1.15, max: 1.2 }
          ]
        },
        { 
          id: 'penyediaan-capita', 
          name: 'Penyediaan Energi Primer per Kapita', 
          color: '#2d5a2d',
          data: [
            { year: 2030, min: 1.2, mean: 1.3, max: 1.4 },
            { year: 2040, min: 1.5, mean: 1.7, max: 1.9 },
            { year: 2050, min: 1.8, mean: 1.95, max: 2.1},
            { year: 2060, min: 1.9, mean: 2.05, max: 2.2 }
          ]
        }
      ],
      'ghg-ebt': [
        { 
          id: 'bauran-hidro', 
          name: 'Hidro', 
          color: '#2c2c2c',
          data: [
            { year: 2030, min: 1.8, mean: 2.05, max: 2.3 },
            { year: 2040, min: 3.6, mean: 3.7, max: 3.8 },
            { year: 2050, min: 4.6, mean: 4.75, max: 4.9 },
            { year: 2060, min: 4.9, mean: 5, max: 5.1 }
          ]
        },
        { 
          id: 'bauran-surya', 
          name: 'Surya', 
          color: '#684d7c',
          data: [
            { year: 2030, min: 1.3, mean: 1.45, max: 1.6 },
            { year: 2040, min: 13.1, mean: 14.55, max: 16 },
            { year: 2050, min: 23.3, mean: 24.3, max: 25.3 },
            { year: 2060, min: 29.8, mean: 30.9, max: 32.0 }
          ]
        },
        { 
          id: 'bauran-angin', 
          name: 'Angin', 
          color: '#b8860b',
          data: [
            { year: 2030, min: 0.3, mean: 0.40, max: 0.5 },
            { year: 2040, min: 0.9, mean: 1.0, max: 1.1 },
            { year: 2050, min: 1, mean: 1.1, max: 1.2 },
            { year: 2060, min: 1.2, mean: 1.25, max: 1.3 }
          ]
        },
        { 
          id: 'bauran-biomasa', 
          name: 'Biomassa', 
          color: '#8b2635',
          data: [
            { year: 2030, min: 7.2, mean: 8.1, max: 9 },
            { year: 2040, min: 6.5, mean: 6.6, max: 6.7 },
            { year: 2050, min: 7.4, mean: 7.5, max: 7.6 },
            { year: 2060, min: 12.2, mean: 12.8, max: 13.4 }
          ]
        },
        { 
          id: 'bauran-panasbumi', 
          name: 'Panas Bumi', 
          color: '#1e6091',
          data: [
            { year: 2030, min: 3.4, mean: 3.7, max: 4 },
            { year: 2040, min: 3.8, mean: 4.1, max: 4.4 },
            { year: 2050, min: 4.8, mean: 4.95, max: 5.1 },
            { year: 2060, min: 4.9, mean: 5.05, max: 5.2 }
          ]
        },
        { 
          id: 'bauran-biogas', 
          name: 'Biogas', 
          color: '#7f5a89',
          data: [
            { year: 2030, min: 0.01, mean: 0.01, max: 0.01 },
            { year: 2040, min: 0.02, mean: 0.02, max: 0.02 },
            { year: 2050, min: 0.03, mean: 0.03, max: 0.03},
            { year: 2060, min: 0.04, mean: 0.05, max: 0.05 }
          ]
        },
        { 
          id: 'bauran-nuklir', 
          name: 'Nuklir', 
          color: '#394f49',
          data: [
            { year: 2030, min: 0.4, mean: 0.45, max: 0.5 },
            { year: 2040, min: 2.8, mean: 3.1, max: 3.4 },
            { year: 2050, min: 6.8, mean: 6.9, max: 7},
            { year: 2060, min: 11.7, mean: 11.9, max: 12.1 }
          ]
        },
        { 
          id: 'bauran-lainnya', 
          name: 'Lainnya', 
          color: '#00798c',
          data: [
            { year: 2030, min: 0.1, mean: 0.15, max: 0.2 },
            { year: 2040, min: 0.5, mean: 0.55, max: 0.6 },
            { year: 2050, min: 1.2, mean: 1.35, max: 1.5},
            { year: 2060, min: 1.5, mean: 1.55, max: 1.6 }
          ]
        },
        { 
          id: 'bauran-gasbumi', 
          name: 'Gas Bumi', 
          color: '#8b5e83',
          data: [
            { year: 2030, min: 12.9, mean: 13.55, max: 14.2 },
            { year: 2040, min: 16.7, mean: 16.75, max: 16.8 },
            { year: 2050, min: 17.8, mean: 17.2, max: 17.3},
            { year: 2060, min: 14.4, mean: 14.9, max: 15.4 }
          ]
        },
        { 
          id: 'bauran-nabati', 
          name: 'Bahan Bakar Nabati', 
          color: '#a6854b',
          data: [
            { year: 2030, min: 5.1, mean: 5.15, max: 5.2},
            { year: 2040, min: 4.2, mean: 4.45, max: 4.7 },
            { year: 2050, min: 3.1, mean: 3.15, max: 3.2},
            { year: 2060, min: 2.1, mean: 2.35, max: 2.6 }
          ]
        }
      ],
      'ghg-fossil-reduction': [
        { 
          id: 'oil-reduction', 
          name: 'Pengurangan Minyak Bumi', 
          color: '#684d7c',
          data: [
            { year: 2030, min: 73.7, mean: 75.65, max: 77.6 },
            { year: 2040, min: 61.98, mean: 64.23, max: 66.5 },
            { year: 2050, min: 56.53, mean: 58.61, max: 60.72 },
            { year: 2060, min: 53.87, mean: 56.09, max: 58.35 }
          ]
        },
        { 
          id: 'coal-reduction', 
          name: 'Pengurangan Batubara', 
          color: '#2c2c2c',
          data: [
            { year: 2030, min: 58.4, mean: 58.58, max: 59.3 },
            { year: 2040, min: 40.3, mean: 41.22, max: 42.16 },
            { year: 2050, min: 31.87, mean: 32.98, max: 34.11 },
            { year: 2060, min: 28.08, mean: 29.73, max: 31.45}
          ]
        }
      ],
      'ghg-energysectorcapita': [
        { 
          id: 'energysectorcapita', 
          name: 'Emisi GRK Sektor Energi (CO2e) per Kapita', 
          color: '#00798c',
          data: [
            { year: 2030, min: 3.41, mean: 3.555, max: 3.7 },
            { year: 2040, min: 2.89, mean: 3.145, max: 3.4},
            { year: 2050, min: 2, mean: 2.1, max: 2.2 },
            { year: 2060, min: 0.36, mean: 0.36, max: 0.36 }
          ]
        }
      ],
      'ghg-intensityemission': [
        { 
          id: 'intensityemission', 
          name: 'Intensitas emisi Energi Primer', 
          color: '#8b5e83',
          data: [
            { year: 2030, min: 2.61, mean: 2.685, max: 2.76 },
            { year: 2040, min: 1.82, mean: 1.9, max: 1.98},
            { year: 2050, min: 1.05, mean: 1.095, max: 1.14 },
            { year: 2060, min: 0.17, mean: 0.18, max: 0.19 }
          ]
        }
      ],
      'ghg-energysector': [
        { 
          id: 'energysector', 
          name: 'Emisi GRK Sektor Energi (CO2e)', 
          color: '#684d7c',
          data: [
            { year: 2030, min: 1017, mean: 1100.5, max: 1184 },
            { year: 2040, min: 925, mean: 1005.5, max: 1086 },
            { year: 2050, min: 676, mean: 710, max: 744 },
            { year: 2060, min: 129, mean: 129, max: 129 }
          ]
        }
      ]
    };
  }, []);

  // Function to generate transparent colors for overlapping
  const generateColors = (baseColor) => {
    const hex = baseColor.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    
    return {
      line: baseColor,
      areaFill: `rgba(${r}, ${g}, ${b}, 0.15)`
    };
  };

  // Chart configurations using static data
  const chartConfigs = {
    'final-energy-sector': {
      title: 'Pemanfaatan Energi Final per Sektor (dalam TOE)',
      charts: staticData['final-energy-sector']
    },
    'final-energy-source': {
      title: 'Pemanfaatan Energi Final per Jenis (dalam TOE)',
      charts: staticData['final-energy-source']
    },
    'primary-energy': {
      title: 'Penyediaan Energi Primer(dalam juta TOE)',
      charts: staticData['primary-energy']
    },
    'energy-intensity': {
      title: 'Intensitas Energi Primer (dalam TOE)',
      charts: staticData['energy-intensity']
    },
    'bauran-energi': {
      title: 'Bauran EBT per sumber energi(dalam %)',
      charts: staticData['bauran-energi']
    },    
    'energy-per-capita': {
      title: 'Pemanfaatan Energi per Kapita (dalam TOE)',
      charts: staticData['energy-per-capita']
    },
    'ghg-ebt': {
      title: 'Bauran Energi Baru dan Energi Terbarukan (EBT-dalam %)',
      charts: staticData['ghg-ebt']
    },
    'ghg-fossil-reduction': {
      title: 'Pengurangan Energi Fosil (dalam %)',
      charts: staticData['ghg-fossil-reduction']
    },
    'ghg-intensityemission': {
      title: 'Intensitas emisi Energi Primer (CO2e)',
      charts: staticData['ghg-intensityemission']
    },
    'ghg-energysectorcapita': {
      title: 'Emisi GRK Sektor Energi (CO2e) per Kapita',
      charts: staticData['ghg-energysectorcapita']
    },
    'ghg-energysector': {
      title: 'Emisi GRK Sektor Energi (CO2e)',
      charts: staticData['ghg-energysector']
    }
  };

  // Initialize selected charts
  React.useEffect(() => {
    const initialSelected = {};
    Object.keys(chartConfigs).forEach(menu => {
      initialSelected[menu] = chartConfigs[menu].charts.reduce((acc, chart) => {
        acc[chart.id] = true;
        return acc;
      }, {});
    });
    setSelectedCharts(initialSelected);
  }, []);

  const menuItems = [
   { id: 'gambaran-umum', name: 'Gambaran Umum', hasSubmenu: false },
    {
      id: 'final-energy',
      name: 'Pemanfaatan Energi Final',
      hasSubmenu: true,
      submenu: [
        { id: 'final-energy-sector', name: 'Sektor (dalam juta TOE)' },
        { id: 'final-energy-source', name: 'Jenis (dalam juta TOE)' }
      ]
    },
    { 
      id: 'primer', 
      name: 'Energi Primer', 
      hasSubmenu: true,
      submenu: [
        { id: 'primary-energy', name: 'Penyediaan Energi Primer (dalam juta TOE)' },
        { id: 'energy-intensity', name: 'Intensitas Energi Primer (dalam TOE)' }
      ]
    },
    { id: 'energy-per-capita', name: 'Energi per Kapita', hasSubmenu: false },
    { 
      id: 'EBT', 
      name: 'EBT', 
      hasSubmenu: true,
      submenu: [
        { id: 'bauran-energi', name: 'Bauran Energi Baru dan Energi Terbarukan (dalam %)' },
        { id: 'ghg-ebt', name: 'Bauran EBT per sumber energi (dalam %)' }
      ]
    },
    
    {
      id: 'ghg',
      name: 'Greenhouse Gas (GHG) Reduction',
      hasSubmenu: true,
      submenu: [
        { id: 'ghg-fossil-reduction', name: 'Pengurangan Energi Fosil(dalam %)' },
        { id: 'ghg-energysector', name: 'Emisi GRK Sektor Energi (CO2e)' },
        { id: 'ghg-energysectorcapita', name: 'Emisi GRK Sektor Energi (CO2e) per Kapita' },
        { id: 'ghg-intensityemission', name: 'Intensitas emisi Energi Primer (CO2e)' }
      ]
    }
  ];

  const currentConfig = chartConfigs[activeMenu];
  const currentSelected = selectedCharts[activeMenu] || {};

  // Prepare chart data with proper structure for transparent overlapping areas
  const chartData = useMemo(() => {
    if (!currentConfig) return [];
    
    const years = currentConfig.charts[0]?.data.map(d => d.year) || [];
    return years.map(year => {
      const dataPoint = { year };
      
      // Add data for each chart
      currentConfig.charts.forEach(chart => {
        const yearData = chart.data.find(d => d.year === year);
        if (yearData && currentSelected[chart.id]) {
          dataPoint[`${chart.id}_min`] = yearData.min;
          dataPoint[`${chart.id}_mean`] = yearData.mean;
          dataPoint[`${chart.id}_max`] = yearData.max;
        }
      });
      
      return dataPoint;
    });
  }, [currentConfig, currentSelected]);

  const toggleChartVisibility = (chartId) => {
    setSelectedCharts(prev => ({
      ...prev,
      [activeMenu]: {
        ...prev[activeMenu],
        [chartId]: !prev[activeMenu]?.[chartId]
      }
    }));
  };

  // Custom Tooltip
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const chartData = {};
      payload.forEach(entry => {
        if (entry.dataKey) {
          const [chartId, dataType] = entry.dataKey.split('_');
          if (!chartData[chartId]) {
            chartData[chartId] = {};
          }
          chartData[chartId][dataType] = entry.value;
          chartData[chartId].payload = entry.payload;
        }
      });

      const validEntries = Object.entries(chartData).filter(([chartId, data]) => {
        return data.mean !== undefined && currentSelected[chartId];
      });

      if (validEntries.length === 0) return null;

      return (
        <div className="bg-white p-3 border border-gray-300 rounded shadow-lg">
          <p className="font-medium mb-2">{`Year: ${label}`}</p>
          {validEntries.map(([chartId, data]) => {
            const chart = currentConfig.charts.find(c => c.id === chartId);
            if (!chart) return null;
            
            const minValue = data.payload[`${chartId}_min`];
            const maxValue = data.payload[`${chartId}_max`];
            
            return (
              <div key={chartId} className="mb-1">
                <p style={{ color: chart.color }} className="font-bold text-sm">
                  {`${chart.name}: ${minValue?.toFixed(2)} - ${maxValue?.toFixed(2)}`}
                </p>
              </div>
            );
          })}
        </div>
      );
    }
    return null;
  };

return (
  <>
    {/* Header - Fixed Top */}
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-800 to-blue-900 text-white shadow-lg">
      <div className="px-6 py-4">
        <h1 className="text-xl md:text-2xl font-bold text-center leading-tight">
          Target yang tercantum pada Peraturan Pemerintah Nomor 40 tahun 2025
        </h1>
        <h2 className="text-lg md:text-xl font-semibold text-center mt-1 text-blue-100">
          <span className="italic">Kebijakan Energi Nasional</span> (KEN)
        </h2>
      </div>
    </div>
    
    <div className="flex flex-col h-screen bg-gray-50 pt-24">
  <div className="flex flex-1 overflow-hidden">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-16'} bg-white shadow-lg transition-all duration-300 flex-shrink-0`}>
        <div className="p-4">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 w-full flex items-center justify-center"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        {isSidebarOpen && (
          <nav className="mt-4">
            {menuItems.map((item) => (
              <div key={item.id}>
                {!item.hasSubmenu ? (
                  <button
                    onClick={() => setActiveMenu(item.id)}
                    className={`w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors ${
                      activeMenu === item.id ? 'bg-blue-50 border-r-2 border-blue-500' : ''
                    }`}
                  >
                    {item.name}
                  </button>
                ) : (
                  <div className="px-4 py-2">
                    <div className="flex items-center text-gray-700 font-medium">
                      {item.name}
                      <ChevronDown size={16} className="ml-2" />
                    </div>
                    <div className="ml-4 mt-2">
                      {item.submenu.map((subItem) => (
                        <button
                          key={subItem.id}
                          onClick={() => setActiveMenu(subItem.id)}
                          className={`w-full text-left px-2 py-2 hover:bg-gray-100 rounded transition-colors ${
                            activeMenu === subItem.id ? 'bg-blue-50 text-blue-600' : ''
                          }`}
                        >
                          {subItem.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>

{/* Main Content */}
<div className="flex-1 p-6 overflow-auto">
  {activeMenu === 'gambaran-umum' ? (
    <GambaranUmum />
  ) : (
    <>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {currentConfig?.title}
        </h1>
        
        {/* Chart toggles */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
          <div className="flex items-center gap-2 mb-3">
            <Filter size={20} />
            <span className="font-medium">Chart Visibility</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {currentConfig?.charts.map((chart) => (
              <button
                key={chart.id}
                onClick={() => toggleChartVisibility(chart.id)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  currentSelected[chart.id]
                    ? 'text-white'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
                style={{
                  backgroundColor: currentSelected[chart.id] ? chart.color : undefined
                }}
              >
                {chart.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <ResponsiveContainer width="100%" height={500}>
          <ComposedChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="year" 
              type="number" 
              scale="linear" 
              domain={['dataMin', 'dataMax']}
            />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            
            {currentConfig?.charts.map((chart) => {
              if (!currentSelected[chart.id]) return null;
              
              const colors = generateColors(chart.color);
              
              return (
                <Area
                  key={`area-${chart.id}`}
                  type="monotone"
                  dataKey={`${chart.id}_max`}
                    stroke="none"
                    fill={colors.areaFill}
                    fillOpacity={1}
                  />
                );
              })}
              
              {/* Then render all mean lines (in front of areas) */}
        {currentConfig?.charts.map((chart) => {
          if (!currentSelected[chart.id]) return null;
          
          const colors = generateColors(chart.color);
          
          return (
            <Line
              key={`line-${chart.id}`}
              type="monotone"
              dataKey={`${chart.id}_mean`}
              stroke={colors.line}
              strokeWidth={3}
              dot={{ fill: colors.line, strokeWidth: 2, r: 5 }}
              name={chart.name}
            />
          );
        })}
      </ComposedChart>
    </ResponsiveContainer>
  </div>

  {/* Enhanced Legend */}
  <div className="mt-4 bg-white rounded-lg shadow-sm p-4">
    <h3 className="font-medium mb-3">Chart Legend</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-2">Visual Elements</h4>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-6 h-0.5 bg-gray-800"></div>
            <span>Mean projection (solid line)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-3 bg-gray-400 opacity-30"></div>
            <span>Uncertainty range (transparent shaded area)</span>
          </div>
        </div>
      </div>
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-2">Interaction</h4>
        <div className="text-sm text-gray-600">
          <p>• Click chart toggles to show/hide individual series</p>
          <p>• Hover over chart for detailed values</p>
          <p>• All charts can be displayed simultaneously with transparent overlays</p>
        </div>
      </div>
    </div>
  </div>
</>
    
    {/* Footer - Fixed Bottom */}
    <footer className="bg-gradient-to-r from-gray-700 to-gray-800 text-white py-3 px-6 shadow-lg">
      <div className="text-center">
        <p className="text-sm">
          Dibuat dalam rangka pemenuhan tugas <span className="font-semibold">Proud To Be Back Program</span> BKD Provinsi Jawa Tengah.
        </p>
      </div>
    </footer>
  </div>
  </>
  );
};

export default EnergyDashboard;
