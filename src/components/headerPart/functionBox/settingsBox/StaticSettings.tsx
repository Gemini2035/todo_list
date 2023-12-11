/*
 * @Author: gemini2035 2530056984@qq.com
 * @Date: 2023-12-11 14:56:29
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-11 17:13:10
 * @FilePath: \todo_list\src\components\headerPart\settingsBox\staticSettings.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useState } from "react";
import styled from "styled-components";

const StaticSettings = () => {
  const [showThirdTips, setShowThirdTips] = useState(false);
  const linkWay = [
    {
        content: '在 Twitter 上关注我',
        href: 'https://twitter.com/Z2530056984',
        icon: <svg focusable="false" aria-hidden="true" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"><circle cx="200" cy="200" fill="#1da1f2" r="200"></circle><path d="M163.4 305.5c88.7 0 137.2-73.5 137.2-137.2 0-2.1 0-4.2-.1-6.2 9.4-6.8 17.6-15.3 24.1-25-8.6 3.8-17.9 6.4-27.7 7.6 10-6 17.6-15.4 21.2-26.7-9.3 5.5-19.6 9.5-30.6 11.7-8.8-9.4-21.3-15.2-35.2-15.2-26.6 0-48.2 21.6-48.2 48.2 0 3.8.4 7.5 1.3 11-40.1-2-75.6-21.2-99.4-50.4-4.1 7.1-6.5 15.4-6.5 24.2 0 16.7 8.5 31.5 21.5 40.1-7.9-.2-15.3-2.4-21.8-6v.6c0 23.4 16.6 42.8 38.7 47.3-4 1.1-8.3 1.7-12.7 1.7-3.1 0-6.1-.3-9.1-.9 6.1 19.2 23.9 33.1 45 33.5-16.5 12.9-37.3 20.6-59.9 20.6-3.9 0-7.7-.2-11.5-.7 21.1 13.8 46.5 21.8 73.7 21.8" fill="#fff"></path></svg>
    },
    {
        content: '在 Facebook 上赞我',
        href: 'https://facebook.com',
        icon: <svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24" height="24"><image width="24" height="24" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJoAAACaCAMAAABmIaElAAAAnFBMVEUAAAAbdfQYePMYePEZd/MY ePIYePIYePIYePIZdvEZd/IZd/IYeO8Yd/IadvIgcO9zrPecxfnb6v3e7P3x+P76/P+qzfuFt/jM 4fzz+f7X6P3F3fxjo/alyvq00/vl8P7w9/7n8f682PqYw/ru9v7///////////////////////// //////8Yd/JDkfT///9SmfUmgPM1iPRgovaT6s2/AAAALXRSTlMAMECAkMDgoGBw0LAg8FAQ9uDk 4O725O7i7Ojr9evt6/Do4ujyIECAwODwkFCj6+vOAAAACXBIWXMAABcSAAAXEgFnn9JSAAAE7ElE QVR42u3c2XbaMBAGYMA22IAwhEBomy7pktCFQNL3f7dCAsRgW5qZfyToSeYe/B3JWqxlGo23OEE0 W1GcJO1FIZKkE6Wt06qyTndRH+1edBJfP+uZBSGSqBm2uOIuhbUN0xkEK682w7XTBSi7QY/t2r55 We7Tlaf8AisWXd8bLCK9+LbwhMNhnnBQVR5EpPvONRMt2DpMqgfLY0XYJhKtWm2p1WWhVlVk2kWm VnBNzpDECfiNS40n2To6Z1iZu+jKu5FcOl5Sw0gH/dzXa1awyaZLTeNdtg5JYwgjk9hCyfi2cDKu LaSMZ+sHlXFsAXqNoyB/rwaXkfveTnDZ+nuLNGalJ5CtJ0mUxqnxoPvh6GJ8udzEZDweT0dXq3vH T9yTyxye0j4MZ5NlVbwbT68sv3M2BXSysZotbWH5pXG8bgMQ9n65lNIWPXt1GgT2+GHpCuvvrTMk qDqvJ06ZnWarUqg6P7phDprlawFqnZ8oMgetvpVG3mUuWrdGhsw3SLXpptXNQYCx85ooc9KqW0Jf LnsktE0arXq8AgrN3Z+RaVXFBhTaiixz06qKDSg01+jEoplynxak0Ai0ciMF+rSZLq3Ut8kHggeG jEI7HhKA0XOoTTsaSYEpB6c+SbRFrtQIFuTulkw7aAjAV9S93XI5Ha6cnyxH0VOqT+ur9nkl+s9c pz5HFtkn4X+mKvW5uNCXFWsUWUoY18q+yP/0hWYA2k0tbSj/032vC60l1MomwJ/upx+ZF9oM+NNE oeuw0EbIv+JDu40GvGr7lw3p1Sw0WW+7jeyZ1jpDWgzPIr3Rtu0A21n0Q9u2A+w0gidajjdQX7Tn Jgr9hVca1nf4okV43/EKafH50hJ43uGXhg0Gb7T/mlb/jUKM86XRvxeC08Y8GqfzQGlTHo3T5aK0 K/KTgtPorZY9UKG0R/KTIu6kCKXRnxRxp5Igjd5At7NcxgQcpH3l0hifLSDtG/1JOfdjD6QxhlX2 JzJIoy83J+yFBZBGf1DMXo7BaDf0B2XsRSyMxlgM3K2Y0pf+MBpjMZC/YIrR/pKfs18wpS8zYzR6 3/Gyy23C0Oj1+bIlSt7SYOyyl+M7naazEaRQfaUobAQhi0U+aMUNUWDnwAetuI0M1KgH2sFWLVCj HmiHJz3kNeqBdnisSH6YQp92fCxRvAyuTzs+lSheL1KnlQ7uiBuCOq18JlG6/65Na5dk4qN12rSq E4nCYlOmVZ7jFBabMq362oGs2HRpNRdJZEeGdWl115ZEfZsqre6gtex4uiqt/hKJZLtKk2a7AiyY gCjSrLdbBBdIFGn2K7b8yZEezX7tRtC5qdFcl5X4rVSN5r7tyD3MpkWjZF1gfl0p0SjXCbmvmw6N mjiAdZJHhUZOG8C68KtCoyeo4vS8GjTOFW7G5XIFmq+L7zjNW7oAmOYvyQJKE6WmoA1ZIE2WQYbW h0A0YaoRYoIWhCZO0NIg7UcCNCCtzToGxh8tRmDr6LteOClN/JoVIvJC08nYZU/XJaKZDGc9RR4p 09SSnDWsqeH4NM3UcJsYtJVoRjmh3iYyo0HzkyOxOnkji+Yvs2RVnkQ6zcT+YJto9YS0buo1UehT 9LMumxYkvepTNKMugxYuKe227NJtKl8HLXQq313hpXFioZ0qAfI+ftze3c3nPwumX/P577s/tydV vd74B9TQMpf77HZbAAAAAElFTkSuQmCC"></image></svg>
    },
    {
        content: '广而告之',
        href: 'https://twitter.com/Z2530056984',
        icon: <svg focusable="false" aria-hidden="true" width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path d="M20.894 13.367c-.758 3.958-5.339 6.566-6.582 7.209a.663.663 0 0 1-.623 0c-1.244-.643-5.825-3.251-6.583-7.209-.459-2.395 1.13-4.854 3.566-4.963A3.84 3.84 0 0 1 14 10.046a3.843 3.843 0 0 1 3.328-1.642c2.436.11 4.025 2.568 3.566 4.963M14 0C6.27 0 0 6.268 0 14c0 2.862.862 5.519 2.335 7.736l-.879 3.078a1.4 1.4 0 0 0 1.732 1.731l3.077-.88A13.926 13.926 0 0 0 14 28c7.732 0 14-6.268 14-14S21.732 0 14 0" fill="#C82D23" fillRule="evenodd"></path></svg>
    }
  ];

  return (
    <StyledStaticSetting>
      <h2 className="item-title">关于</h2>
      <a
        href="https://privacy.microsoft.com/zh-cn/privacystatement"
        target="_blank"
      >
        <span>隐私与Cookie</span>
      </a>
      <hr />
      <a
        href="https://support.microsoft.com/zh-cn/office/%E5%AF%BC%E5%87%BA%E6%82%A8%E7%9A%84-microsoft-%E5%BE%85%E5%8A%9E%E4%BA%8B%E9%A1%B9%E5%B8%90%E6%88%B7-d286b243-affb-4db4-addc-162e16588943"
        target="_blank"
      >
        <span>导出你的信息</span>
      </a>
      <hr />
      <div style={{ fontSize: "0.875rem" }}>
        <span>
          使用 To Do Web 应用受{" "}
          <a
            style={{ display: "inline-block" }}
            href="https://www.microsoft.com/zh-cn/servicesagreement"
            target="_blank"
          >
            Microsoft 服务协议
          </a>{" "}
          的约束
        </span>
      </div>
      <hr />
      <div className="third-notice">
        <h2
          className="title-button"
          onClick={() => setShowThirdTips(!showThirdTips)}
        >
          第三方通知
        </h2>
        <hr />
        {showThirdTips && (
          <div className="settingsAboutSection-licenses">
            <p>
              This file is based on or incorporates material from the projects
              listed below (collectively, Third Party Code). Microsoft is not
              the original author of the Third Party Code. The original
              copyright notice and the license under which Microsoft received
              such Third Party Code, are set forth below. Such licenses and
              notices are provided for informational purposes only. Microsoft
              licenses the Third Party Code to you under the terms set forth in
              the EULA for the Microsoft Product. Microsoft reserves all other
              rights not expressly granted under this agreement, whether by
              implication, estoppel or otherwise.&nbsp; Provided for
              Informational Purposes Only
            </p>
            <section>
              <h4> css-supports v0.1.1 </h4>
              <div>
                <p>The MIT License (MIT) </p>
                <p> Copyright (c) 2016 Tomas Ruzicka </p>
                <p>
                  {" "}
                  Permission is hereby granted, free of charge, to any person
                  obtaining a copy of this software and associated documentation
                  files (the Software), to deal in the Software without
                  restriction, including without limitation the rights to use,
                  copy, modify, merge, publish, distribute, sublicense, and/or
                  sell copies of the Software, and to permit persons to whom the
                  Software is furnished to do so, subject to the following
                  conditions:{" "}
                </p>
                <p>
                  {" "}
                  The above copyright notice and this permission notice shall be
                  included in all copies or substantial portions of the
                  Software.{" "}
                </p>
                <p>
                  {" "}
                  THE SOFTWARE IS PROVIDED AS IS, WITHOUT WARRANTY OF ANY KIND,
                  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
                  WARRANTIES OF MERCHANTABILITY,FITNESS FOR A PARTICULAR PURPOSE
                  AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
                  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
                  OTHERWISE, ARISING FROM,OUT OF OR IN CONNECTION WITH THE
                  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                </p>
              </div>
              <hr />
            </section>
            <section>
              <h4> redux-actions v2.6.4 </h4>
              <div>
                <p>The MIT License (MIT) </p>
                <p> Copyright (c) Andrew Clark </p>
                <p>
                  {" "}
                  Permission is hereby granted, free of charge, to any person
                  obtaining a copy of this software and associated documentation
                  files (the Software), to deal in the Software without
                  restriction, including without limitation the rights to use,
                  copy, modify, merge, publish, distribute, sublicense, and/or
                  sell copies of the Software, and to permit persons to whom the
                  Software is furnished to do so, subject to the following
                  conditions:{" "}
                </p>
                <p>
                  {" "}
                  The above copyright notice and this permission notice shall be
                  included in all copies or substantial portions of the
                  Software.{" "}
                </p>
                <p>
                  {" "}
                  THE SOFTWARE IS PROVIDED AS IS, WITHOUT WARRANTY OF ANY KIND,
                  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
                  WARRANTIES OF MERCHANTABILITY,FITNESS FOR A PARTICULAR PURPOSE
                  AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
                  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
                  OTHERWISE, ARISING FROM,OUT OF OR IN CONNECTION WITH THE
                  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                </p>
              </div>
              <hr />
            </section>
            <section>
              <h4> whatwg-fetch v1.0.0 </h4>
              <div>
                <p>Copyright (c) 2014-2016 GitHub, Inc. </p>
                <p>
                  {" "}
                  Permission is hereby granted, free of charge, to any person
                  obtaining a copy of this software and associated documentation
                  files (the "Software"), to deal in the Software without
                  restriction, including without limitation the rights to use,
                  copy, modify, merge, publish, distribute, sublicense, and/or
                  sell copies of the Software, and to permit persons to whom the
                  Software is furnished to do so, subject to the following
                  conditions:{" "}
                </p>
                <p>
                  {" "}
                  The above copyright notice and this permission notice shall be
                  included in all copies or substantial portions of the
                  Software.{" "}
                </p>
                <p>
                  {" "}
                  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
                  KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                  PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
                  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
                  OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
                  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                </p>
              </div>
              <hr />
            </section>
            <section>
              <h4> redux-routing v0.3.3 </h4>
              <div>
                <p>Copyright (c) 2015, Callum Jefferies </p>
                <p>
                  {" "}
                  Permission to use, copy, modify, and/or distribute this
                  software for any purpose with or without fee is hereby
                  granted, provided that the above copyright notice and this
                  permission notice appear in all copies.{" "}
                </p>
                <p>
                  {" "}
                  THE SOFTWARE IS PROVIDED AS IS AND THE AUTHOR DISCLAIMS ALL
                  WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED
                  WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL
                  THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR
                  CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
                  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF
                  CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
                  OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
                </p>
              </div>
              <hr />
            </section>
            <section>
              <h4> babel v6.18.0 </h4>
              <div>
                <p>MIT License </p>
                <p>
                  {" "}
                  Copyright (c) 2014-2016 Sebastian McKenzie
                  &lt;sebmck@gmail.com&gt;{" "}
                </p>
                <p>
                  {" "}
                  Permission is hereby granted, free of charge, to any person
                  obtaining a copy of this software and associated documentation
                  files (theSoftware), to deal in the Software without
                  restriction, including without limitation the rights to use,
                  copy, modify, merge, publish,distribute, sublicense, and/or
                  sell copies of the Software, and to permit persons to whom the
                  Software is furnished to do so, subject to the following
                  conditions:{" "}
                </p>
                <p>
                  {" "}
                  The above copyright notice and this permission notice shall be
                  included in all copies or substantial portions of the
                  Software.{" "}
                </p>
                <p>
                  {" "}
                  THE SOFTWARE IS PROVIDED AS IS, WITHOUT WARRANTY OF ANY
                  KIND,EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                  PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
                  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
                  OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
                  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                </p>
              </div>
              <hr />
            </section>
            <section>
              <h4> react-dnd-touch-backend v9.4.0 </h4>
              <div>
                <p>The MIT License (MIT) </p>
                <p> Copyright (c) 2015 Dan Abramov </p>
                <p>
                  {" "}
                  Permission is hereby granted, free of charge, to any person
                  obtaining a copy of this software and associated documentation
                  files (the Software), to deal in the Software without
                  restriction, including without limitation the rights to use,
                  copy, modify, merge, publish, distribute, sublicense, and/or
                  sell copies of the Software, and to permit persons to whom the
                  Software is furnished to do so, subject to the following
                  conditions:{" "}
                </p>
                <p>
                  {" "}
                  The above copyright notice and this permission notice shall be
                  included in all copies or substantial portions of the
                  Software.{" "}
                </p>
                <p>
                  {" "}
                  THE SOFTWARE IS PROVIDED AS IS, WITHOUT WARRANTY OF ANY KIND,
                  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
                  WARRANTIES OF MERCHANTABILITY,FITNESS FOR A PARTICULAR PURPOSE
                  AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
                  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
                  OTHERWISE, ARISING FROM,OUT OF OR IN CONNECTION WITH THE
                  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                </p>
              </div>
              <hr />
            </section>
            <section>
              <h4> react-dnd v9.4.0 </h4>
              <div>
                <p>The MIT License (MIT) </p>
                <p> Copyright (c) 2015 Dan Abramov </p>
                <p>
                  {" "}
                  Permission is hereby granted, free of charge, to any person
                  obtaining a copy of this software and associated documentation
                  files (the Software), to deal in the Software without
                  restriction, including without limitation the rights to use,
                  copy, modify, merge, publish, distribute, sublicense, and/or
                  sell copies of the Software, and to permit persons to whom the
                  Software is furnished to do so, subject to the following
                  conditions:{" "}
                </p>
                <p>
                  {" "}
                  The above copyright notice and this permission notice shall be
                  included in all copies or substantial portions of the
                  Software.{" "}
                </p>
                <p>
                  {" "}
                  THE SOFTWARE IS PROVIDED AS IS, WITHOUT WARRANTY OF ANY KIND,
                  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
                  WARRANTIES OF MERCHANTABILITY,FITNESS FOR A PARTICULAR PURPOSE
                  AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
                  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
                  OTHERWISE, ARISING FROM,OUT OF OR IN CONNECTION WITH THE
                  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                </p>
              </div>
              <hr />
            </section>
            <section>
              <h4> react-redux v4.0.1 </h4>
              <div>
                <p>The MIT License (MIT) </p>
                <p> Copyright (c) 2015-present Dan Abramov </p>
                <p>
                  {" "}
                  Permission is hereby granted, free of charge, to any person
                  obtaining a copy of this software and associated documentation
                  files (the Software), to deal in the Software without
                  restriction, including without limitation the rights to use,
                  copy, modify, merge, publish, distribute, sublicense, and/or
                  sell copies of the Software, and to permit persons to whom the
                  Software is furnished to do so, subject to the following
                  conditions:{" "}
                </p>
                <p>
                  {" "}
                  The above copyright notice and this permission notice shall be
                  included in all copies or substantial portions of the
                  Software.{" "}
                </p>
                <p>
                  {" "}
                  THE SOFTWARE IS PROVIDED AS IS, WITHOUT WARRANTY OF ANY KIND,
                  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
                  WARRANTIES OF MERCHANTABILITY,FITNESS FOR A PARTICULAR PURPOSE
                  AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
                  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
                  OTHERWISE, ARISING FROM,OUT OF OR IN CONNECTION WITH THE
                  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                </p>
              </div>
              <hr />
            </section>
            <section>
              <h4> svg-inline-react v3.0.0 </h4>
              <div>
                <p>Copyright 2015-2017 Jaeho Lee &lt;me@jaeholee.org&gt; </p>
                <p>
                  {" "}
                  Permission is hereby granted, free of charge, to any person
                  obtaining a copy of this software and associated documentation
                  files (the "Software"), to deal in the Software without
                  restriction, including without limitation the rights to use,
                  copy, modify, merge, publish, distribute, sublicense, and/or
                  sell copies of the Software, and to permit persons to whom the
                  Software is furnished to do so, subject to the following
                  conditions:{" "}
                </p>
                <p>
                  {" "}
                  The above copyright notice and this permission notice shall be
                  included in all copies or substantial portions of the
                  Software.{" "}
                </p>
                <p>
                  {" "}
                  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
                  KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                  PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
                  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
                  OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
                  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                </p>
              </div>
              <hr />
            </section>
            <section>
              <h4> react-textarea-autosize v7.1.0 </h4>
              <div>
                <p>The MIT License (MIT) </p>
                <p> Copyright (c) 2013 Andrey Popp </p>
                <p>
                  {" "}
                  Permission is hereby granted, free of charge, to any person
                  obtaining a copy of this software and associated documentation
                  files (the Software), to deal in the Software without
                  restriction, including without limitation the rights to use,
                  copy, modify, merge, publish, distribute, sublicense, and/or
                  sell copies of the Software, and to permit persons to whom the
                  Software is furnished to do so,subject to the following
                  conditions:{" "}
                </p>
                <p>
                  {" "}
                  The above copyright notice and this permission notice shall be
                  included in all copies or substantial portions of the
                  Software.{" "}
                </p>
                <p>
                  {" "}
                  THE SOFTWARE IS PROVIDED AS IS, WITHOUT WARRANTY OF ANY KIND,
                  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                  PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
                  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
                  OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
                  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                </p>
              </div>
              <hr />
            </section>
            <section>
              <h4> reselect v4.0.0 </h4>
              <div>
                <p>The MIT License (MIT) </p>
                <p> Copyright (c) 2015-2018 Reselect Contributors </p>
                <p>
                  {" "}
                  Permission is hereby granted, free of charge, to any person
                  obtaining a copy of this software and associated documentation
                  files (the Software), to deal in the Software without
                  restriction, including without limitation the rights to use,
                  copy, modify, merge, publish, distribute, sublicense, and/or
                  sell copies of the Software, and to permit persons to whom the
                  Software is furnished to do so, subject to the following
                  conditions:{" "}
                </p>
                <p>
                  {" "}
                  The above copyright notice and this permission notice shall be
                  included in all copies or substantial portions of the
                  Software.{" "}
                </p>
                <p>
                  {" "}
                  THE SOFTWARE IS PROVIDED AS IS, WITHOUT WARRANTY OF ANY KIND,
                  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
                  WARRANTIES OF MERCHANTABILITY,FITNESS FOR A PARTICULAR PURPOSE
                  AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
                  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
                  OTHERWISE, ARISING FROM,OUT OF OR IN CONNECTION WITH THE
                  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                </p>
              </div>
              <hr />
            </section>
            <section>
              <h4> moment-timezone v0.5.21 </h4>
              <div>
                <p>The MIT License (MIT) </p>
                <p> Copyright (c) JS Foundation and other contributors </p>
                <p>
                  {" "}
                  Permission is hereby granted, free of charge, to any person
                  obtaining a copy of this software and associated documentation
                  files (the "Software"), to deal in the Software without
                  restriction, including without limitation the rights to use,
                  copy, modify, merge, publish, distribute, sublicense, and/or
                  sell copies of the Software, and to permit persons to whom the
                  Software is furnished to do so, subject to the following
                  conditions:{" "}
                </p>
                <p>
                  {" "}
                  The above copyright notice and this permission notice shall be
                  included in all copies or substantial portions of the
                  Software.{" "}
                </p>
                <p>
                  {" "}
                  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
                  KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                  PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
                  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
                  OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
                  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                </p>
              </div>
              <hr />
            </section>
            <section>
              <h4> classnames v2.2.5 </h4>
              <div>
                <p>The MIT License (MIT) </p>
                <p> Copyright (c) 2016 Jed Watson </p>
                <p>
                  {" "}
                  Permission is hereby granted, free of charge, to any person
                  obtaining a copy of this software and associated documentation
                  files (the "Software"), to deal in the Software without
                  restriction, including without limitation the rights to use,
                  copy, modify, merge, publish, distribute, sublicense, and/or
                  sell copies of the Software, and to permit persons to whom the
                  Software is furnished to do so, subject to the following
                  conditions:{" "}
                </p>
                <p>
                  {" "}
                  The above copyright notice and this permission notice shall be
                  included in all copies or substantial portions of the
                  Software.{" "}
                </p>
                <p>
                  {" "}
                  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
                  KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                  PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
                  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
                  OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
                  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                </p>
              </div>
              <hr />
            </section>
            <section>
              <h4> invariant v2.2.4 </h4>
              <div>
                <p>MIT License </p>
                <p> Copyright (c) 2013-present, Facebook, Inc. </p>
                <p>
                  {" "}
                  Permission is hereby granted, free of charge, to any person
                  obtaining a copy of this software and associated documentation
                  files (the "Software"), to deal in the Software without
                  restriction, including without limitation the rights to use,
                  copy, modify, merge, publish, distribute, sublicense, and/or
                  sell copies of the Software, and to permit persons to whom the
                  Software is furnished to do so, subject to the following
                  conditions:{" "}
                </p>
                <p>
                  {" "}
                  The above copyright notice and this permission notice shall be
                  included in all copies or substantial portions of the
                  Software.{" "}
                </p>
                <p>
                  {" "}
                  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
                  KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                  PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
                  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
                  OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
                  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                </p>
              </div>
              <hr />
            </section>
            <section>
              <h4> moment v2.22.2 </h4>
              <div>
                <p>Copyright (c) JS Foundation and other contributors </p>
                <p>
                  {" "}
                  Permission is hereby granted, free of charge, to any person
                  obtaining a copy of this software and associated documentation
                  files (the "Software"), to deal in the Software without
                  restriction, including without limitation the rights to use,
                  copy, modify, merge, publish, distribute, sublicense, and/or
                  sell copies of the Software, and to permit persons to whom the
                  Software is furnished to do so, subject to the following
                  conditions:{" "}
                </p>
                <p>
                  {" "}
                  The above copyright notice and this permission notice shall be
                  included in all copies or substantial portions of the
                  Software.{" "}
                </p>
                <p>
                  {" "}
                  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
                  KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                  PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
                  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
                  OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
                  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                </p>
              </div>
              <hr />
            </section>
            <section>
              <h4> react v16.7.0 </h4>
              <div>
                <p>MIT License </p>
                <p> Copyright (c) Facebook, Inc. and its affiliates. </p>
                <p>
                  {" "}
                  Permission is hereby granted, free of charge, to any person
                  obtaining a copy of this software and associated documentation
                  files (the "Software"), to deal in the Software without
                  restriction, including without limitation the rights to use,
                  copy, modify, merge, publish, distribute, sublicense, and/or
                  sell copies of the Software, and to permit persons to whom the
                  Software is furnished to do so, subject to the following
                  conditions:{" "}
                </p>
                <p>
                  {" "}
                  The above copyright notice and this permission notice shall be
                  included in all copies or substantial portions of the
                  Software.{" "}
                </p>
                <p>
                  {" "}
                  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
                  KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                  PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
                  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
                  OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
                  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                </p>
              </div>
              <hr />
            </section>
            <section>
              <h4> react-dom v16.7.0 </h4>
              <div>
                <p>MIT License </p>
                <p> Copyright (c) Facebook, Inc. and its affiliates. </p>
                <p>
                  {" "}
                  Permission is hereby granted, free of charge, to any person
                  obtaining a copy of this software and associated documentation
                  files (the "Software"), to deal in the Software without
                  restriction, including without limitation the rights to use,
                  copy, modify, merge, publish, distribute, sublicense, and/or
                  sell copies of the Software, and to permit persons to whom the
                  Software is furnished to do so, subject to the following
                  conditions:{" "}
                </p>
                <p>
                  {" "}
                  The above copyright notice and this permission notice shall be
                  included in all copies or substantial portions of the
                  Software.{" "}
                </p>
                <p>
                  {" "}
                  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
                  KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                  PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
                  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
                  OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
                  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                </p>
              </div>
              <hr />
            </section>
            <section>
              <h4> immutable v3.8.1 </h4>
              <div>
                <p>BSD License </p>
                <p> For Immutable JS software </p>
                <p>
                  {" "}
                  Copyright (c) 2014-2015, Facebook, Inc. All rights reserved.{" "}
                </p>
                <p>
                  {" "}
                  Redistribution and use in source and binary forms, with or
                  without modification, are permitted provided that the
                  following conditions are met:{" "}
                </p>
                <p>
                  {" "}
                  * Redistributions of source code must retain the above
                  copyright notice, this list of conditions and the following
                  disclaimer.{" "}
                </p>
                <p>
                  {" "}
                  * Redistributions in binary form must reproduce the above
                  copyright notice, this list of conditions and the following
                  disclaimer in the documentation and/or other materials
                  provided with the distribution.{" "}
                </p>
                <p>
                  {" "}
                  * Neither the name Facebook nor the names of its contributors
                  may be used to endorse or promote products derived from this
                  software without specific prior written permission.{" "}
                </p>
                <p>
                  {" "}
                  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND
                  CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES,
                  INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
                  MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
                  DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR
                  CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
                  SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
                  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
                  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
                  HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
                  CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
                  OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
                  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                </p>
              </div>
              <hr />
            </section>
            <section>
              <h4> redux v6.0.0 </h4>
              <div>
                <p>The MIT License (MIT) </p>
                <p> Copyright (c) 2015-present Dan Abramov </p>
                <p>
                  {" "}
                  Permission is hereby granted, free of charge, to any person
                  obtaining a copy of this software and associated documentation
                  files (the "Software"), to deal in the Software without
                  restriction, including without limitation the rights to use,
                  copy, modify, merge, publish, distribute, sublicense, and/or
                  sell copies of the Software, and to permit persons to whom the
                  Software is furnished to do so, subject to the following
                  conditions:{" "}
                </p>
                <p>
                  {" "}
                  The above copyright notice and this permission notice shall be
                  included in all copies or substantial portions of the
                  Software.{" "}
                </p>
                <p>
                  {" "}
                  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
                  KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                  PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
                  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
                  OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
                  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                </p>
              </div>
              <hr />
            </section>
            <section>
              <h4> redux-thunk v2.3.0 </h4>
              <div>
                <p>The MIT License (MIT) </p>
                <p> Copyright (c) 2015-present Dan Abramov </p>
                <p>
                  {" "}
                  Permission is hereby granted, free of charge, to any person
                  obtaining a copy of this software and associated documentation
                  files (the "Software"), to deal in the Software without
                  restriction, including without limitation the rights to use,
                  copy, modify, merge, publish, distribute, sublicense, and/or
                  sell copies of the Software, and to permit persons to whom the
                  Software is furnished to do so, subject to the following
                  conditions:{" "}
                </p>
                <p>
                  {" "}
                  The above copyright notice and this permission notice shall be
                  included in all copies or substantial portions of the
                  Software.{" "}
                </p>
                <p>
                  {" "}
                  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
                  KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                  PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
                  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
                  OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
                  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                </p>
              </div>
              <hr />
            </section>
            <section>
              <h4> lodash.debounce v4.0.8 </h4>
              <div>
                <p>
                  Copyright JS Foundation and other contributors
                  &lt;https://js.foundation/&gt;{" "}
                </p>
                <p>
                  {" "}
                  Based on Underscore.js, copyright Jeremy Ashkenas,
                  DocumentCloud and Investigative Reporters &amp; Editors
                  &lt;http://underscorejs.org/&gt;{" "}
                </p>
                <p>
                  {" "}
                  This software consists of voluntary contributions made by many
                  individuals. For exact contribution history, see the revision
                  history available at https://github.com/lodash/lodash{" "}
                </p>
                <p>
                  {" "}
                  The following license applies to all parts of this software
                  except as documented below:{" "}
                </p>
                <p> ==== </p>
                <p>
                  {" "}
                  Permission is hereby granted, free of charge, to any person
                  obtaining a copy of this software and associated documentation
                  files (the "Software"), to deal in the Software without
                  restriction, including without limitation the rights to use,
                  copy, modify, merge, publish, distribute, sublicense, and/or
                  sell copies of the Software, and to permit persons to whom the
                  Software is furnished to do so, subject to the following
                  conditions:{" "}
                </p>
                <p>
                  {" "}
                  The above copyright notice and this permission notice shall be
                  included in all copies or substantial portions of the
                  Software.{" "}
                </p>
                <p>
                  {" "}
                  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
                  KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                  PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
                  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
                  OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
                  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.{" "}
                </p>
                <p> ==== </p>
                <p>
                  {" "}
                  Copyright and related rights for sample code are waived via
                  CC0. Sample code is defined as all source code displayed
                  within the prose of the documentation.{" "}
                </p>
                <p> CC0: http://creativecommons.org/publicdomain/zero/1.0/ </p>
                <p> ==== </p>
                <p>
                  {" "}
                  Files located in the node_modules and vendor directories are
                  externally maintained libraries used by this software which
                  have their own licenses; we recommend you read them, as their
                  terms may differ from the terms above.
                </p>
              </div>
              <hr />
            </section>
            <section>
              <h4> lodash.thr/ottle v4.1.1 </h4>
              <div>
                <p>
                  Copyright JS Foundation and other contributors
                  &lt;https://js.foundation/&gt;{" "}
                </p>
                <p>
                  {" "}
                  Based on Underscore.js, copyright Jeremy Ashkenas,
                  DocumentCloud and Investigative Reporters &amp; Editors
                  &lt;http://underscorejs.org/&gt;{" "}
                </p>
                <p>
                  {" "}
                  This software consists of voluntary contributions made by many
                  individuals. For exact contribution history, see the revision
                  history available at https://github.com/lodash/lodash{" "}
                </p>
                <p>
                  {" "}
                  The following license applies to all parts of this software
                  except as documented below:{" "}
                </p>
                <p> ==== </p>
                <p>
                  {" "}
                  Permission is hereby granted, free of charge, to any person
                  obtaining a copy of this software and associated documentation
                  files (the "Software"), to deal in the Software without
                  restriction, including without limitation the rights to use,
                  copy, modify, merge, publish, distribute, sublicense, and/or
                  sell copies of the Software, and to permit persons to whom the
                  Software is furnished to do so, subject to the following
                  conditions:{" "}
                </p>
                <p>
                  {" "}
                  The above copyright notice and this permission notice shall be
                  included in all copies or substantial portions of the
                  Software.{" "}
                </p>
                <p>
                  {" "}
                  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
                  KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                  PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
                  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
                  OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
                  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.{" "}
                </p>
                <p> ==== </p>
                <p>
                  {" "}
                  Copyright and related rights for sample code are waived via
                  CC0. Sample code is defined as all source code displayed
                  within the prose of the documentation.{" "}
                </p>
                <p> CC0: http://creativecommons.org/publicdomain/zero/1.0/ </p>
                <p> ==== </p>
                <p>
                  {" "}
                  Files located in the node_modules and vendor directories are
                  externally maintained libraries used by this software which
                  have their own licenses; we recommend you read them, as their
                  terms may differ from the terms above.
                </p>
              </div>
              <hr />
            </section>
            <section>
              <h4> lodash.uniq v4.5.0 </h4>
              <div>
                <p>
                  Copyright JS Foundation and other contributors
                  &lt;https://js.foundation/&gt;{" "}
                </p>
                <p>
                  {" "}
                  Based on Underscore.js, copyright Jeremy Ashkenas,
                  DocumentCloud and Investigative Reporters &amp; Editors
                  &lt;http://underscorejs.org/&gt;{" "}
                </p>
                <p>
                  {" "}
                  This software consists of voluntary contributions made by many
                  individuals. For exact contribution history, see the revision
                  history available at https://github.com/lodash/lodash{" "}
                </p>
                <p>
                  {" "}
                  The following license applies to all parts of this software
                  except as documented below:{" "}
                </p>
                <p> ==== </p>
                <p>
                  {" "}
                  Permission is hereby granted, free of charge, to any person
                  obtaining a copy of this software and associated documentation
                  files (the "Software"), to deal in the Software without
                  restriction, including without limitation the rights to use,
                  copy, modify, merge, publish, distribute, sublicense, and/or
                  sell copies of the Software, and to permit persons to whom the
                  Software is furnished to do so, subject to the following
                  conditions:{" "}
                </p>
                <p>
                  {" "}
                  The above copyright notice and this permission notice shall be
                  included in all copies or substantial portions of the
                  Software.{" "}
                </p>
                <p>
                  {" "}
                  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
                  KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                  PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
                  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
                  OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
                  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.{" "}
                </p>
                <p> ==== </p>
                <p>
                  {" "}
                  Copyright and related rights for sample code are waived via
                  CC0. Sample code is defined as all source code displayed
                  within the prose of the documentation.{" "}
                </p>
                <p> CC0: http://creativecommons.org/publicdomain/zero/1.0/ </p>
                <p> ==== </p>
                <p>
                  {" "}
                  Files located in the node_modules and vendor directories are
                  externally maintained libraries used by this software which
                  have their own licenses; we recommend you read them, as their
                  terms may differ from the terms above.
                </p>
              </div>
              <hr />
            </section>
            <section>
              <h4> lodash.isequal v4.5.0 </h4>
              <div>
                <p>
                  Copyright JS Foundation and other contributors
                  &lt;https://js.foundation/&gt;{" "}
                </p>
                <p>
                  {" "}
                  Based on Underscore.js, copyright Jeremy Ashkenas,
                  DocumentCloud and Investigative Reporters &amp; Editors
                  &lt;http://underscorejs.org/&gt;{" "}
                </p>
                <p>
                  {" "}
                  This software consists of voluntary contributions made by many
                  individuals. For exact contribution history, see the revision
                  history available at https://github.com/lodash/lodash{" "}
                </p>
                <p>
                  {" "}
                  The following license applies to all parts of this software
                  except as documented below:{" "}
                </p>
                <p> ==== </p>
                <p>
                  {" "}
                  Permission is hereby granted, free of charge, to any person
                  obtaining a copy of this software and associated documentation
                  files (the "Software"), to deal in the Software without
                  restriction, including without limitation the rights to use,
                  copy, modify, merge, publish, distribute, sublicense, and/or
                  sell copies of the Software, and to permit persons to whom the
                  Software is furnished to do so, subject to the following
                  conditions:{" "}
                </p>
                <p>
                  {" "}
                  The above copyright notice and this permission notice shall be
                  included in all copies or substantial portions of the
                  Software.{" "}
                </p>
                <p>
                  {" "}
                  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
                  KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                  PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
                  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
                  OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
                  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.{" "}
                </p>
                <p> ==== </p>
                <p>
                  {" "}
                  Copyright and related rights for sample code are waived via
                  CC0. Sample code is defined as all source code displayed
                  within the prose of the documentation.{" "}
                </p>
                <p> CC0: http://creativecommons.org/publicdomain/zero/1.0/ </p>
                <p> ==== </p>
                <p>
                  {" "}
                  Files located in the node_modules and vendor directories are
                  externally maintained libraries used by this software which
                  have their own licenses; we recommend you read them, as their
                  terms may differ from the terms above.
                </p>
              </div>
              <hr />
            </section>
            <section>
              <h4> react-immutable-proptypes v2.1.0 </h4>
              <div>
                <p>The MIT License (MIT) </p>
                <p> Copyright (c) 2015 James Burnett </p>
                <p>
                  {" "}
                  Permission is hereby granted, free of charge, to any person
                  obtaining a copy of this software and associated documentation
                  files (the "Software"), to deal in the Software without
                  restriction, including without limitation the rights to use,
                  copy, modify, merge, publish, distribute, sublicense, and/or
                  sell copies of the Software, and to permit persons to whom the
                  Software is furnished to do so, subject to the following
                  conditions:{" "}
                </p>
                <p>
                  {" "}
                  The above copyright notice and this permission notice shall be
                  included in all copies or substantial portions of the
                  Software.{" "}
                </p>
                <p>
                  {" "}
                  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
                  KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                  PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
                  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
                  OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
                  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                </p>
              </div>
              <hr />
            </section>
            <section>
              <h4> diff-match-patch v1.0.0 </h4>
              <div>
                <p>Copyright (c) 2011 Google, Inc. </p>
                <p>
                  {" "}
                  Licensed under the Apache License, Version 2.0 (the
                  "License"); you may not use this file except in compliance
                  with the License. You may obtain a copy of the License at{" "}
                </p>
                <p> http://www.apache.org/licenses/LICENSE-2.0 </p>
                <p>
                  {" "}
                  Unless required by applicable law or agreed to in writing,
                  software distributed under the License is distributed on an
                  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
                  either express or implied. See the License for the specific
                  language governing permissions and limitations under the
                  License.
                </p>
              </div>
              <hr />
            </section>
            <section>
              <h4> copy-to-clipboard v3.0.8 </h4>
              <div>
                <p>MIT License </p>
                <p>
                  {" "}
                  Copyright (c) 2017 sudodoki &lt;smd.deluzion@gmail.com&gt;{" "}
                </p>
                <p>
                  {" "}
                  Permission is hereby granted, free of charge, to any person
                  obtaining a copy of this software and associated documentation
                  files (the "Software"), to deal in the Software without
                  restriction, including without limitation the rights to use,
                  copy, modify, merge, publish, distribute, sublicense, and/or
                  sell copies of the Software, and to permit persons to whom the
                  Software is furnished to do so, subject to the following
                  conditions:{" "}
                </p>
                <p>
                  {" "}
                  The above copyright notice and this permission notice shall be
                  included in all copies or substantial portions of the
                  Software.{" "}
                </p>
                <p>
                  {" "}
                  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
                  KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                  PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
                  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
                  OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
                  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                </p>
              </div>
              <hr />
            </section>
            <section>
              <h4> react-copy-to-clipboard v5.0.0 </h4>
              <div>
                <p>The MIT License (MIT) </p>
                <p> Copyright (c) 2016 Nik Butenko </p>
                <p>
                  {" "}
                  Permission is hereby granted, free of charge, to any person
                  obtaining a copy of this software and associated documentation
                  files (the "Software"), to deal in the Software without
                  restriction, including without limitation the rights to use,
                  copy, modify, merge, publish, distribute, sublicense, and/or
                  sell copies of the Software, and to permit persons to whom the
                  Software is furnished to do so, subject to the following
                  conditions:{" "}
                </p>
                <p>
                  {" "}
                  The above copyright notice and this permission notice shall be
                  included in all copies or substantial portions of the
                  Software.{" "}
                </p>
                <p>
                  {" "}
                  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
                  KIND, EXPRESS OR{" "}
                </p>
                <p>
                  {" "}
                  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
                  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
                  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
                  HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
                  WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
                  OTHER DEALINGS IN THE SOFTWARE.
                </p>
              </div>
              <hr />
            </section>
            <section>
              <h4> core-js v2.6.9 </h4>
              <div>
                <p>Copyright (c) 2014-2019 Denis Pushkarev </p>
                <p>
                  {" "}
                  Permission is hereby granted, free of charge, to any person
                  obtaining a copy of this software and associated documentation
                  files (the "Software"), to deal in the Software without
                  restriction, including without limitation the rights to use,
                  copy, modify, merge, publish, distribute, sublicense, and/or
                  sell copies of the Software, and to permit persons to whom the
                  Software is furnished to do so, subject to the following
                  conditions:{" "}
                </p>
                <p>
                  {" "}
                  The above copyright notice and this permission notice shall be
                  included in all copies or substantial portions of the
                  Software.{" "}
                </p>
                <p>
                  {" "}
                  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
                  KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                  PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
                  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
                  OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
                  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                </p>
              </div>
              <hr />
            </section>
            <section>
              <h4> react-transition-group v2.5.3 </h4>
              <div>
                <p>BSD 3-Clause License </p>
                <p> Copyright (c) 2018, React Community </p>
                <p>
                  {" "}
                  Forked from React (https://github.com/facebook/react)
                  Copyright 2013-present, Facebook, Inc.{" "}
                </p>
                <p> All rights reserved. </p>
                <p>
                  {" "}
                  Redistribution and use in source and binary forms, with or
                  without modification, are permitted provided that the
                  following conditions are met:{" "}
                </p>
                <p>
                  {" "}
                  * Redistributions of source code must retain the above
                  copyright notice, this list of conditions and the following
                  disclaimer.{" "}
                </p>
                <p>
                  {" "}
                  * Redistributions in binary form must reproduce the above
                  copyright notice, this list of conditions and the following
                  disclaimer in the documentation and/or other materials
                  provided with the distribution.{" "}
                </p>
                <p>
                  {" "}
                  * Neither the name of the copyright holder nor the names of
                  its contributors may be used to endorse or promote products
                  derived from this software without specific prior written
                  permission.{" "}
                </p>
                <p>
                  {" "}
                  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND
                  CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES,
                  INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
                  MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
                  DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR
                  CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
                  SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
                  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
                  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
                  HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
                  CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
                  OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
                  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                </p>
              </div>
              <hr />
            </section>
            <section>
              <h4> deepmerge v0.2.10 </h4>
              <div>
                <p>The MIT License (MIT) </p>
                <p> Copyright (c) 2012 Nicholas Fisher </p>
                <p>
                  {" "}
                  Permission is hereby granted, free of charge, to any person
                  obtaining a copy of this software and associated documentation
                  files (the "Software"), to deal in the Software without
                  restriction, including without limitation the rights to use,
                  copy, modify, merge, publish, distribute, sublicense, and/or
                  sell copies of the Software, and to permit persons to whom the
                  Software is furnished to do so, subject to the following
                  conditions:{" "}
                </p>
                <p>
                  {" "}
                  The above copyright notice and this permission notice shall be
                  included in all copies or substantial portions of the
                  Software.{" "}
                </p>
                <p>
                  {" "}
                  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
                  KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                  PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
                  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
                  OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
                  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                </p>
              </div>
              <hr />
            </section>
            <section>
              <h4> file-saver 2.0.2 </h4>
              <div>
                <p>The MIT License </p>
                <p> Copyright © 2016 Eli Grey. </p>
                <p>
                  {" "}
                  Permission is hereby granted, free of charge, to any person
                  obtaining a copy of this software and associated documentation
                  files (the "Software"), to deal in the Software without
                  restriction, including without limitation the rights to use,
                  copy, modify, merge, publish, distribute, sublicense, and/or
                  sell copies of the Software, and to permit persons to whom the
                  Software is furnished to do so, subject to the following
                  conditions:{" "}
                </p>
                <p>
                  {" "}
                  The above copyright notice and this permission notice shall be
                  included in all copies or substantial portions of the
                  Software.{" "}
                </p>
                <p>
                  {" "}
                  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
                  KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                  PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
                  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
                  OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
                  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                </p>
              </div>
              <hr />
            </section>
            <section>
              <h4> react-helmet v5.2.1 </h4>
              <div>
                <p>The MIT License (MIT) </p>
                <p> Copyright (c) 2015 NFL </p>
                <p>
                  {" "}
                  Permission is hereby granted, free of charge, to any person
                  obtaining a copy of this software and associated documentation
                  files (the "Software"), to deal in the Software without
                  restriction, including without limitation the rights to use,
                  copy, modify, merge, publish, distribute, sublicense, and/or
                  sell copies of the Software, and to permit persons to whom the
                  Software is furnished to do so, subject to the following
                  conditions:{" "}
                </p>
                <p>
                  {" "}
                  The above copyright notice and this permission notice shall be
                  included in all{" "}
                </p>
                <p> copies or substantial portions of the Software. </p>
                <p>
                  {" "}
                  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
                  KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                  PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
                  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
                  OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
                  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                </p>
              </div>
              <hr />
            </section>
            <section>
              <h4> react-quill v1.3.3 </h4>
              <div>
                <p>The MIT License (MIT) </p>
                <p> Copyright (c) 2016, zenoamaro zenoamaro@gmail.com </p>
                <p>
                  {" "}
                  Permission is hereby granted, free of charge, to any person
                  obtaining a copy of this software and associated documentation
                  files (the "Software"), to deal in the Software without
                  restriction, including without limitation the rights to use,
                  copy, modify, merge, publish, distribute, sublicense, and/or
                  sell copies of the Software, and to permit persons to whom the
                  Software is furnished to do so, subject to the following
                  conditions:{" "}
                </p>
                <p>
                  {" "}
                  The above copyright notice and this permission notice shall be
                  included in all copies or substantial portions of the
                  Software.{" "}
                </p>
                <p>
                  {" "}
                  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
                  KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                  PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
                  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
                  OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
                  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                </p>
              </div>
              <hr />
            </section>
            <section>
              <h4> react-select v3.0.8 </h4>
              <div>
                <p>The MIT License (MIT) </p>
                <p> Copyright (c) 2018 Jed Watson </p>
                <p>
                  {" "}
                  Permission is hereby granted, free of charge, to any person
                  obtaining a copy of this software and associated documentation
                  files (the "Software"), to deal in the Software without
                  restriction, including without limitation the rights to use,
                  copy, modify, merge, publish, distribute, sublicense, and/or
                  sell copies of the Software, and to permit persons to whom the
                  Software is furnished to do so, subject to the following
                  conditions:{" "}
                </p>
                <p>
                  {" "}
                  The above copyright notice and this permission notice shall be
                  included in all copies or substantial portions of the
                  Software.{" "}
                </p>
                <p>
                  {" "}
                  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
                  KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                  PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
                  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
                  OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
                  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                </p>
              </div>
              <hr />
            </section>
          </div>
        )}
      </div>
      <hr />
      <div className="icon-container">
        <img src="/todo_badge.png" alt="Icon" className="icon" />
        <div className="description">
          <p style={{ fontSize: "0.875rem", fontWeight: "800" }}>
            Xxxxxxxxx To Do
          </p>
          <p>版权所有 © 2023 Xxxxxxxxx</p>
          <p>保留所有权限</p>
          <p>版本 x.xxx.x</p>
        </div>
      </div>
      <hr />
      <p className="copy-button" onClick={() => console.log('111')}>复制会话和用户ID</p>
      <hr />
      <h2 className="item-title">连接</h2>
      { linkWay.map(item => {
        return (
            <div className="link-way" key={item.content}>
                <a href={item.href}>
                    {item.icon}
                    <span>{item.content}</span>
                </a>
                <hr />
            </div>
        )
      }) }
    </StyledStaticSetting>
  );
};

export default StaticSettings;

const StyledStaticSetting = styled.div`
  .item-title {
    font-size: 1.125rem;
    font-weight: inherit;
    height: 42px;
  }
  a {
    display: block;
    text-decoration: none;
    color: var(--ms-main-blue-light);
    font-size: 0.875rem;
    &:hover {
      text-decoration: underline;
    }
  }
  hr {
    margin: 4px 0;
    background-color: transparent;
    height: 1px;
    border: 0;
  }
  .third-notice {
    .title-button {
      font-size: 0.875rem;
      color: var(--ms-main-blue-light);
      cursor: pointer;
    }
    .settingsAboutSection-licenses {
      font-size: 0.875rem;
      font-weight: 600;
      h4 {
        margin: 6px 0;
      }
    }
  }
  .icon-container {
    display: flex;
    align-content: center;
    .icon {
      width: 80px;
      height: auto;
    }
    .description {
      padding: 0 16px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      p {
        font-weight: normal;
        font-size: 0.75rem;
        margin-bottom: 3px;
      }
    }
  }
  .copy-button {
    font-size: 0.875rem;
    cursor: pointer;
    color: var(--ms-main-blue-light);
    margin: 3px 0%;
    font-weight: 800;
  }
  .link-way {
    display: flex;
    align-items: center;
    margin-bottom: 5%;
    & a {
        display: flex;
        align-items: center;
        font-size: 0.875;
        svg {
            width: 24px;
            height: auto;
        }
        span {
            padding-left: 8px;
        }
    }
  }
`;
