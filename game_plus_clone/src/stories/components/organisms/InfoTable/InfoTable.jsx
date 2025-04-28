import H3 from "../../atoms/H3/H3";

const InfoTable = () => {
  return (
    <section className="d-none d-md-block my-5 px-4">
      <div>
        <div class="table-responsive">
          <table class="sc-jWojfa KXFxc table table-dark table-striped table-borderless">
            <thead>
              <tr>
                <th className="bg-black"></th>
                <th className="py-4 px-3 bg-black">
                  <H3
                    text={"Ücretsiz"}
                    classes={"text-white text-center my-2"}
                  />
                </th>
                <th className="py-4 px-3 bg-black">
                  <H3
                    text={"Performance"}
                    classes={"text-primary text-center my-2"}
                  />
                </th>
                <th className="py-4 px-3 bg-black">
                  <H3
                    text={"Ultimate"}
                    classes={"text-primary text-center my-2"}
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-4 px-3">Oyun sistemi</td>
                <td className="py-4 px-3 text-center">
                  Basic sistem | 4 vCPUs
                </td>
                <td className="py-4 px-3 text-center">GeForce RTX | 8 vCPUs</td>
                <td className="py-4 px-3 text-center">
                  GeForce RTX 4080 | 16 vCPUs
                </td>
              </tr>
              <tr>
                <td className="py-4 px-3 ">Maksimum Oturum Süresi</td>
                <td className="py-4 px-3 text-center">30 dk</td>
                <td className="py-4 px-3 text-center">6 saat</td>
                <td className="py-4 px-3 text-center">8 saat</td>
              </tr>
              <tr>
                <td className="py-4 px-3 ">Yayın kalitesi</td>
                <td className="py-4 px-3 text-center">1080p'ye kadar</td>
                <td className="py-4 px-3 text-center">1440p'ye kadar</td>
                <td className="py-4 px-3 text-center">4K'ye kadar</td>
              </tr>
              <tr>
                <td className="py-4 px-3">Saniye başına kare hızı (FPS)</td>
                <td className="py-4 px-3 text-center">60 FPS'e kadar</td>
                <td className="py-4 px-3 text-center">60 FPS'e kadar</td>
                <td className="py-4 px-3 text-center">240 FPS'e kadar</td>
              </tr>
              <tr>
                <td className="py-4 px-3 ">NVIDIA RTX</td>
                <td className="py-4 px-3 text-center">
                  <div>
                    <span>Off</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#666"
                        d="M18.707 6.707a1 1 0 00-1.414-1.414L12 10.586 6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 101.414 1.414L12 13.414l5.293 5.293a1 1 0 001.414-1.414L13.414 12l5.293-5.293z"
                      ></path>
                    </svg>
                  </div>
                </td>
                <td className="py-4 px-3 text-center">
                  <div class="sc-ekkqgF kpxQnV">
                    <span>On</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id="ultimateIconGradient"
                          x1="0%"
                          y1="0%"
                          x2="0%"
                          y2="100%"
                        >
                          <stop offset="-2%" stop-color="#ddffa1"></stop>
                          <stop offset="103%" stop-color="#76b900"></stop>
                        </linearGradient>
                      </defs>
                      <path
                        d="M22 11.086v.92a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3"
                        stroke="#76B900"
                        stroke-width="2"
                        fill="none"
                        fill-rule="evenodd"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                </td>
                <td className="py-4 px-3 text-center">
                  <div class="sc-ekkqgF kpxQnV">
                    <span>On</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id="ultimateIconGradient"
                          x1="0%"
                          y1="0%"
                          x2="0%"
                          y2="100%"
                        >
                          <stop offset="-2%" stop-color="#ddffa1"></stop>
                          <stop offset="103%" stop-color="#76b900"></stop>
                        </linearGradient>
                      </defs>
                      <path
                        d="M22 11.086v.92a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3"
                        stroke="url(#ultimateIconGradient)"
                        stroke-width="2"
                        fill="none"
                        fill-rule="evenodd"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-3">Ultra geniş monitör desteği</td>
                <td className="py-4 px-3 text-center">
                  <div class="sc-ekkqgF kpxQnV">
                    <span>Off</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#666"
                        d="M18.707 6.707a1 1 0 00-1.414-1.414L12 10.586 6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 101.414 1.414L12 13.414l5.293 5.293a1 1 0 001.414-1.414L13.414 12l5.293-5.293z"
                      ></path>
                    </svg>
                  </div>
                </td>
                <td className="py-4 px-3 text-center">
                  <div class="sc-ekkqgF kpxQnV">
                    <span>On</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id="ultimateIconGradient"
                          x1="0%"
                          y1="0%"
                          x2="0%"
                          y2="100%"
                        >
                          <stop offset="-2%" stop-color="#ddffa1"></stop>
                          <stop offset="103%" stop-color="#76b900"></stop>
                        </linearGradient>
                      </defs>
                      <path
                        d="M22 11.086v.92a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3"
                        stroke="#76B900"
                        stroke-width="2"
                        fill="none"
                        fill-rule="evenodd"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                </td>
                <td className="py-4 px-3 text-center">
                  <div class="sc-ekkqgF kpxQnV">
                    <span>On</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id="ultimateIconGradient"
                          x1="0%"
                          y1="0%"
                          x2="0%"
                          y2="100%"
                        >
                          <stop offset="-2%" stop-color="#ddffa1"></stop>
                          <stop offset="103%" stop-color="#76b900"></stop>
                        </linearGradient>
                      </defs>
                      <path
                        d="M22 11.086v.92a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3"
                        stroke="url(#ultimateIconGradient)"
                        stroke-width="2"
                        fill="none"
                        fill-rule="evenodd"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-3 ">Oyun içi ayarların korunması</td>
                <td className="py-4 px-3 text-center">
                  <div class="sc-ekkqgF kpxQnV">
                    <span>Off</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#666"
                        d="M18.707 6.707a1 1 0 00-1.414-1.414L12 10.586 6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 101.414 1.414L12 13.414l5.293 5.293a1 1 0 001.414-1.414L13.414 12l5.293-5.293z"
                      ></path>
                    </svg>
                  </div>
                </td>
                <td className="py-4 px-3 text-center">
                  <div class="sc-ekkqgF kpxQnV">
                    <span>On</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id="ultimateIconGradient"
                          x1="0%"
                          y1="0%"
                          x2="0%"
                          y2="100%"
                        >
                          <stop offset="-2%" stop-color="#ddffa1"></stop>
                          <stop offset="103%" stop-color="#76b900"></stop>
                        </linearGradient>
                      </defs>
                      <path
                        d="M22 11.086v.92a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3"
                        stroke="#76B900"
                        stroke-width="2"
                        fill="none"
                        fill-rule="evenodd"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                </td>
                <td className="py-4 px-3 text-center">
                  <div class="sc-ekkqgF kpxQnV">
                    <span>On</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id="ultimateIconGradient"
                          x1="0%"
                          y1="0%"
                          x2="0%"
                          y2="100%"
                        >
                          <stop offset="-2%" stop-color="#ddffa1"></stop>
                          <stop offset="103%" stop-color="#76b900"></stop>
                        </linearGradient>
                      </defs>
                      <path
                        d="M22 11.086v.92a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3"
                        stroke="url(#ultimateIconGradient)"
                        stroke-width="2"
                        fill="none"
                        fill-rule="evenodd"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-3 ">DLSS Kare Oluşturma</td>
                <td className="py-4 px-3 text-center">
                  <div class="sc-ekkqgF kpxQnV">
                    <span>Off</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#666"
                        d="M18.707 6.707a1 1 0 00-1.414-1.414L12 10.586 6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 101.414 1.414L12 13.414l5.293 5.293a1 1 0 001.414-1.414L13.414 12l5.293-5.293z"
                      ></path>
                    </svg>
                  </div>
                </td>
                <td className="py-4 px-3 text-center">
                  <div class="sc-ekkqgF kpxQnV">
                    <span>Off</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#666"
                        d="M18.707 6.707a1 1 0 00-1.414-1.414L12 10.586 6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 101.414 1.414L12 13.414l5.293 5.293a1 1 0 001.414-1.414L13.414 12l5.293-5.293z"
                      ></path>
                    </svg>
                  </div>
                </td>
                <td className="py-4 px-3 text-center">
                  <div class="sc-ekkqgF kpxQnV">
                    <span>On</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id="ultimateIconGradient"
                          x1="0%"
                          y1="0%"
                          x2="0%"
                          y2="100%"
                        >
                          <stop offset="-2%" stop-color="#ddffa1"></stop>
                          <stop offset="103%" stop-color="#76b900"></stop>
                        </linearGradient>
                      </defs>
                      <path
                        d="M22 11.086v.92a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3"
                        stroke="url(#ultimateIconGradient)"
                        stroke-width="2"
                        fill="none"
                        fill-rule="evenodd"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-3">NVIDIA Reflex</td>
                <td className="py-4 px-3 text-center">
                  <div class="sc-ekkqgF kpxQnV">
                    <span>Off</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#666"
                        d="M18.707 6.707a1 1 0 00-1.414-1.414L12 10.586 6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 101.414 1.414L12 13.414l5.293 5.293a1 1 0 001.414-1.414L13.414 12l5.293-5.293z"
                      ></path>
                    </svg>
                  </div>
                </td>
                <td className="py-4 px-3 text-center">
                  <div class="sc-ekkqgF kpxQnV">
                    <span>Off</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#666"
                        d="M18.707 6.707a1 1 0 00-1.414-1.414L12 10.586 6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 101.414 1.414L12 13.414l5.293 5.293a1 1 0 001.414-1.414L13.414 12l5.293-5.293z"
                      ></path>
                    </svg>
                  </div>
                </td>
                <td className="py-4 px-3 text-center">
                  <div class="sc-ekkqgF kpxQnV">
                    <span>On</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id="ultimateIconGradient"
                          x1="0%"
                          y1="0%"
                          x2="0%"
                          y2="100%"
                        >
                          <stop offset="-2%" stop-color="#ddffa1"></stop>
                          <stop offset="103%" stop-color="#76b900"></stop>
                        </linearGradient>
                      </defs>
                      <path
                        d="M22 11.086v.92a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3"
                        stroke="url(#ultimateIconGradient)"
                        stroke-width="2"
                        fill="none"
                        fill-rule="evenodd"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-3">HDR ve SDR10</td>
                <td className="py-4 px-3 text-center">
                  <div class="sc-ekkqgF kpxQnV">
                    <span>Off</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#666"
                        d="M18.707 6.707a1 1 0 00-1.414-1.414L12 10.586 6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 101.414 1.414L12 13.414l5.293 5.293a1 1 0 001.414-1.414L13.414 12l5.293-5.293z"
                      ></path>
                    </svg>
                  </div>
                </td>
                <td className="py-4 px-3 text-center">
                  <div class="sc-ekkqgF kpxQnV">
                    <span>Off</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#666"
                        d="M18.707 6.707a1 1 0 00-1.414-1.414L12 10.586 6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 101.414 1.414L12 13.414l5.293 5.293a1 1 0 001.414-1.414L13.414 12l5.293-5.293z"
                      ></path>
                    </svg>
                  </div>
                </td>
                <td className="py-4 px-3 text-center">
                  <div class="sc-ekkqgF kpxQnV">
                    <span>On</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id="ultimateIconGradient"
                          x1="0%"
                          y1="0%"
                          x2="0%"
                          y2="100%"
                        >
                          <stop offset="-2%" stop-color="#ddffa1"></stop>
                          <stop offset="103%" stop-color="#76b900"></stop>
                        </linearGradient>
                      </defs>
                      <path
                        d="M22 11.086v.92a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3"
                        stroke="url(#ultimateIconGradient)"
                        stroke-width="2"
                        fill="none"
                        fill-rule="evenodd"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-3">Cloud G-Sync</td>
                <td className="py-4 px-3 text-center">
                  <div class="sc-ekkqgF kpxQnV">
                    <span>Off</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#666"
                        d="M18.707 6.707a1 1 0 00-1.414-1.414L12 10.586 6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 101.414 1.414L12 13.414l5.293 5.293a1 1 0 001.414-1.414L13.414 12l5.293-5.293z"
                      ></path>
                    </svg>
                  </div>
                </td>
                <td className="py-4 px-3 text-center">
                  <div class="sc-ekkqgF kpxQnV">
                    <span>Off</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#666"
                        d="M18.707 6.707a1 1 0 00-1.414-1.414L12 10.586 6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 101.414 1.414L12 13.414l5.293 5.293a1 1 0 001.414-1.414L13.414 12l5.293-5.293z"
                      ></path>
                    </svg>
                  </div>
                </td>
                <td className="py-4 px-3 text-center">
                  <div class="sc-ekkqgF kpxQnV">
                    <span>On</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id="ultimateIconGradient"
                          x1="0%"
                          y1="0%"
                          x2="0%"
                          y2="100%"
                        >
                          <stop offset="-2%" stop-color="#ddffa1"></stop>
                          <stop offset="103%" stop-color="#76b900"></stop>
                        </linearGradient>
                      </defs>
                      <path
                        d="M22 11.086v.92a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3"
                        stroke="url(#ultimateIconGradient)"
                        stroke-width="2"
                        fill="none"
                        fill-rule="evenodd"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-3 ">Ses</td>
                <td className="py-4 px-3 text-center">Stereo</td>
                <td className="py-4 px-3 text-center">Surround 5.1</td>
                <td className="py-4 px-3 text-center">Surround 5.1 / 7.1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default InfoTable;
