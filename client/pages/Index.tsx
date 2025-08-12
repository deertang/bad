import { Download, Heart, Sparkles, Users, Menu } from "lucide-react";
import { useState } from "react";

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-tinytype-cream via-background to-tinytype-yellow-light">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-tinytype-yellow/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fc3bf88e946e64f46946c0306e319a815%2F385b32e1c1924b24bc25088c83e3c55e?format=webp&width=800"
                alt="tinytype logo"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="flex items-center">
              <h1 className="font-bold text-tinytype-brown text-lg">排版小动物</h1>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="mailto:fb@tinytypezoo.com" className="text-tinytype-brown hover:text-tinytype-yellow-dark transition-colors">联系我们</a>
          </nav>
          <button
            className="md:hidden p-2 text-tinytype-brown"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-tinytype-yellow/20">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a
                href="mailto:fb@tinytypezoo.com"
                className="text-tinytype-brown hover:text-tinytype-yellow-dark transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                联系我们
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4" style={{backgroundColor: 'rgb(255, 250, 196)'}}>
        <div className="container mx-auto text-center">
          <div className="mb-12">
            <div className="w-80 h-80 mx-auto mb-8 flex items-center justify-center transform hover:scale-105 transition-transform">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fc3bf88e946e64f46946c0306e319a815%2F47bb180e269c47b1917ecf870745f17c?format=webp&width=800"
                alt="排版小动物工作场景"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-tinytype-brown mb-6">
            <h6>
              <span>
                <h5>tinytype 排版小动物</h5>
              </span>
              <br />
              <p style={{color: 'rgba(55, 52, 47, 0.8)', fontSize: '24px'}}>
                一群温暖的陪你记录生活的小动物
              </p>
            </h6>
          </h1>
          <p className="text-lg text-tinytype-brown/60 mb-12 max-w-2xl mx-auto">
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#download"
              className="inline-flex items-center justify-center px-8 py-4 bg-black hover:bg-gray-800 text-white font-semibold rounded-2xl transition-all transform hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              立即下载
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-100 hover:bg-gray-200 text-tinytype-brown font-semibold rounded-2xl transition-all shadow-sm hover:shadow-md"
            >
              了解更多
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="pt-32 pb-20 px-4" style={{backgroundColor: 'rgb(255, 250, 196)'}}>
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-tinytype-brown mb-16">
            更多小伙伴
          </h2>
          <div className="grid grid-cols-4 gap-8">
            <div className="flex justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fc3bf88e946e64f46946c0306e319a815%2F6f18905c70cc49b089348b75a6b02c93?format=webp&width=800"
                alt="小伙伴1"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fc3bf88e946e64f46946c0306e319a815%2F91daef2abf174b01927a04cf678c172a?format=webp&width=800"
                alt="小伙伴2"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fc3bf88e946e64f46946c0306e319a815%2Fd7e255de37834144b4823c6a06fd06ad?format=webp&width=800"
                alt="小伙伴3"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fc3bf88e946e64f46946c0306e319a815%2Fa0073f09e15d461786c587802ed2fbed?format=webp&width=800"
                alt="小伙伴4"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-20 px-4" style={{backgroundColor: 'rgb(255, 250, 196)'}}>
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-tinytype-brown mb-6">
                温暖可爱的排版样式
              </h2>
              <p className="text-lg text-tinytype-brown/70 mb-8">
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-tinytype-yellow rounded-full mr-3"></div>
                  <span className="text-tinytype-brown/80">全世界各地的小动物，带来有他们温度和风格模板</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-tinytype-yellow rounded-full mr-3"></div>
                  <span className="text-tinytype-brown/80">智能排版，按小动物和时间留存</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-tinytype-yellow rounded-full mr-3"></div>
                  <span className="text-tinytype-brown/80">一键保存分享</span>
                </li>
              </ul>
              <p className="text-tinytype-brown/80 mb-4 mt-6">开始你的小动物排版，每一次记录都温暖</p>
              <div className="mt-8">
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <div className="bg-black text-white px-8 py-4 rounded-2xl hover:bg-gray-800 transition-colors flex items-center space-x-3">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs">下载到</div>
                      <div className="text-lg font-semibold">App Store</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="flex justify-center gap-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fc3bf88e946e64f46946c0306e319a815%2F6a86f869416941efa0fc6c3ff0e17a19?format=webp&width=800"
                alt="App Preview 1"
                className="w-52 h-auto object-contain rounded-[3.5rem]"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fc3bf88e946e64f46946c0306e319a815%2Fbd69fb272d0a49b5a0a9d4ce094978d4?format=webp&width=800"
                alt="App Preview 3"
                className="w-52 h-96 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer id="contact" className="text-white px-4 pb-16" style={{backgroundColor: 'rgb(255, 250, 196)'}}>
        <div className="container mx-auto">
          <div className="border-t border-tinytype-brown/20 pt-8 text-center text-sm text-tinytype-brown/60 space-y-2">
            <div className="flex flex-wrap justify-center gap-6 mb-4">
              <a href="#" className="hover:text-tinytype-yellow-dark transition-colors">用户协议</a>
              <span>|</span>
              <a href="#" className="hover:text-tinytype-yellow-dark transition-colors">隐私政策</a>
              <span>|</span>
              <a href="mailto:fb@tinytypezoo.com" className="hover:text-tinytype-yellow-dark transition-colors">
                联系��们
              </a>
              <span>|</span>
              <span>开若图科技（上海）有限公司</span>
              <span>|</span>
              <span>沪ICP备2025136576号</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
