import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, CreditCard, Shield, Lock, Zap } from 'lucide-react';
import { useState } from 'react';

const courseDatabase: Record<string, any> = {
  'bug-bounty': {
    title: 'Bug Bounty Hunting Masterclass',
    price: 1999,
    duration: '8 Weeks',
    modules: 16,
    image: './images/course1.jpg',
  },
  'malware-development': {
    title: 'Malware Development Advanced',
    price: 3499,
    duration: '10 Weeks',
    modules: 14,
    image: './images/course1.jpg',
  }
};

export const Enrollment = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = courseDatabase[courseId || 'bug-bounty'];
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    paymentMethod: 'card',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);

  if (!course) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
          <button 
            onClick={() => navigate('/courses')}
            className="px-6 py-3 bg-cyan-500 text-white rounded-lg font-semibold"
          >
            Back to Courses
          </button>
        </div>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setStep(3); // Success page
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden pt-24">
      {/* Back Button */}
      <motion.button
        onClick={() => navigate(`/course/${courseId}`)}
        whileHover={{ x: -5 }}
        className="ml-6 mb-4 flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Course
      </motion.button>

      <div className="max-w-6xl mx-auto px-6 pb-16">
        {/* Progress Steps */}
        {step < 3 && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-8 mb-16"
          >
            {[1, 2].map((num) => (
              <div key={num} className="flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all ${
                    step >= num 
                      ? 'bg-cyan-500 text-white' 
                      : 'bg-white/10 text-gray-400'
                  }`}
                >
                  {step > num ? <Check className="w-6 h-6" /> : num}
                </motion.div>
                <span className="text-sm font-semibold text-gray-400">
                  {num === 1 ? 'Your Info' : 'Payment'}
                </span>
                {num === 1 && (
                  <div className={`h-1 w-12 ${step > 1 ? 'bg-cyan-500' : 'bg-white/10'}`} />
                )}
              </div>
            ))}
          </motion.div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-3xl p-12"
              >
                <h2 className="text-3xl font-bold mb-8">Your Information</h2>
                <form onSubmit={() => setStep(2)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <label className="block text-sm font-semibold mb-2">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-500/50 focus:outline-none transition-all"
                        placeholder="John"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <label className="block text-sm font-semibold mb-2">Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-500/50 focus:outline-none transition-all"
                        placeholder="Doe"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="block text-sm font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-500/50 focus:outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-sm font-semibold mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-500/50 focus:outline-none transition-all"
                      placeholder="+880 1234 567890"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-sm font-semibold mb-2">Country *</label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-500/50 focus:outline-none transition-all"
                    >
                      <option value="">Select your country</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="India">India</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Other">Other</option>
                    </select>
                  </motion.div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                  >
                    Continue to Payment
                  </motion.button>
                </form>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-3xl p-12"
              >
                <h2 className="text-3xl font-bold mb-8">Payment Method</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    {['card', 'bkash', 'nagad', 'bank'].map((method, idx) => (
                      <motion.label
                        key={method}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-4 p-4 border border-white/10 rounded-lg cursor-pointer hover:border-cyan-500/30 transition-all"
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={method}
                          checked={formData.paymentMethod === method}
                          onChange={handleInputChange}
                          className="w-5 h-5 cursor-pointer"
                        />
                        <div className="flex-1">
                          <p className="font-semibold capitalize">
                            {method === 'card' ? 'Debit/Credit Card' : 
                             method === 'bkash' ? 'bKash' :
                             method === 'nagad' ? 'Nagad' : 'Bank Transfer'}
                          </p>
                          <p className="text-sm text-gray-400">
                            {method === 'card' ? 'Visa, Mastercard' :
                             method === 'bkash' ? 'Fast and secure' :
                             method === 'nagad' ? 'Instant payment' : 'Direct bank transfer'}
                          </p>
                        </div>
                      </motion.label>
                    ))}
                  </div>

                  <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4 flex items-start gap-3">
                    <Shield className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Secure Transaction</p>
                      <p className="text-sm text-gray-400">Your payment information is encrypted and secure</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 py-3 border-2 border-white/10 text-white font-bold rounded-lg hover:border-white/30 transition-all"
                    >
                      Back
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isLoading}
                      className="flex-1 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all disabled:opacity-50"
                    >
                      {isLoading ? 'Processing...' : 'Complete Enrollment'}
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/30 rounded-3xl p-12 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                  className="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500 mx-auto mb-6 flex items-center justify-center"
                >
                  <Check className="w-10 h-10 text-emerald-400" />
                </motion.div>

                <h2 className="text-4xl font-bold mb-4">Enrollment Successful! 🎉</h2>
                <p className="text-xl text-gray-300 mb-2">
                  Welcome, {formData.firstName}!
                </p>
                <p className="text-gray-400 mb-8">
                  A confirmation email has been sent to {formData.email}
                </p>

                <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-8 text-left">
                  <p className="text-sm text-gray-400 mb-3 font-semibold">What happens next:</p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-cyan-400" />
                      Check your email for course access link
                    </li>
                    <li className="flex items-center gap-3">
                      <Lock className="w-5 h-5 text-cyan-400" />
                      Create your account on the learning platform
                    </li>
                    <li className="flex items-center gap-3">
                      <CreditCard className="w-5 h-5 text-cyan-400" />
                      Access all course materials immediately
                    </li>
                  </ul>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/')}
                  className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                >
                  Back to Home
                </motion.button>
              </motion.div>
            )}
          </div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:sticky lg:top-32 h-fit"
          >
            <div className="bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">Order Summary</h3>

              {/* Course Card */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h4 className="font-bold mb-2">{course.title}</h4>
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>{course.modules} Modules</span>
                  <span>{course.duration}</span>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6 pb-6 border-b border-white/10">
                <div className="flex justify-between">
                  <span className="text-gray-400">Course Price</span>
                  <span className="font-semibold">৳{course.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Tax/VAT</span>
                  <span className="font-semibold">৳0</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center mb-6 pb-6 border-b border-white/10">
                <span className="text-xl font-bold">Total</span>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  ৳{course.price.toLocaleString()}
                </span>
              </div>

              {/* Benefits */}
              <div className="space-y-3">
                <p className="text-sm font-semibold text-gray-300 mb-3">What's Included:</p>
                {[
                  'Lifetime Course Access',
                  'All Course Materials',
                  'Certificate of Completion',
                  'Student Community Access',
                  'Email Support'
                ].map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center gap-2 text-sm text-gray-300"
                  >
                    <Check className="w-4 h-4 text-cyan-400" />
                    {benefit}
                  </motion.div>
                ))}
              </div>

              <motion.div
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mt-6 p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-center"
              >
                <p className="text-sm text-cyan-300 font-semibold">Money-back Guarantee</p>
                <p className="text-xs text-gray-400">30 days, no questions asked</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
