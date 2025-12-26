import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black pb-8">
      <div className="sticky top-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-rez-gray-200 dark:border-white/10">
        <div className="px-4 py-4 flex items-center gap-4">
          <Link to="/" className="p-2 rounded-rez-lg hover:bg-rez-gray-100 dark:hover:bg-white/10 transition-colors">
            <ArrowLeft className="w-6 h-6 text-rez-navy dark:text-white" />
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-rez-lg bg-purple-500/20 flex items-center justify-center">
              <FileText className="w-5 h-5 text-purple-500" />
            </div>
            <div>
              <h1 className="text-h4 font-poppins text-rez-navy dark:text-white">Terms & Conditions</h1>
              <p className="text-caption text-rez-gray-600 dark:text-gray-400">Last updated: Dec 26, 2024</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
        <p className="text-body text-rez-gray-700 dark:text-gray-300">
          By using ReZ, you agree to these terms. Please read them carefully.
        </p>

        <section>
          <h2 className="text-h3 font-poppins text-rez-navy dark:text-white mb-4">1. Acceptance of Terms</h2>
          <p className="text-body text-rez-gray-700 dark:text-gray-300">
            By accessing ReZ, you agree to be bound by these Terms and Conditions.
          </p>
        </section>

        <section>
          <h2 className="text-h3 font-poppins text-rez-navy dark:text-white mb-4">2. ReZ Coins & Rewards</h2>
          <p className="text-body text-rez-gray-700 dark:text-gray-300 mb-3">
            Coins are virtual rewards with no cash value. They may expire as per policy.
          </p>
        </section>

        <section>
          <h2 className="text-h3 font-poppins text-rez-navy dark:text-white mb-4">3. Contact Us</h2>
          <div className="p-4 rounded-rez-lg bg-rez-gray-50 dark:bg-white/5 border border-rez-gray-200 dark:border-white/10">
            <p className="text-body text-rez-navy dark:text-white">Email: legal@rez.com</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Terms;
