const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="text-gray-600 mb-4">
            At YourBrand, we're dedicated to providing exceptional services and
            solutions that help businesses thrive in today's competitive
            landscape.
          </p>
          <p className="text-gray-600 mb-4">
            With years of experience and a team of skilled professionals, we
            deliver innovative solutions that drive growth and success for our
            clients.
          </p>
          <p className="text-gray-600">
            Our commitment to excellence and customer satisfaction sets us
            apart, making us a trusted partner for businesses across industries.
          </p>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Our Values
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-gray-600">
                Excellence in everything we do
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-gray-600">
                Innovation and continuous improvement
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-gray-600">Customer-centric approach</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-gray-600">Integrity and transparency</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
