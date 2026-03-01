import React, { useContext, useEffect, useRef, useState } from 'react'
import uniqid from 'uniqid'
import Quill from 'quill'
import { assets } from '../../assets/assets';
import 'quill/dist/quill.snow.css';
import { AppContext } from '../../context/AppContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const AddCourse = () => {

  const { serverUrl, getToken } = useContext(AppContext)

  const quillRef = useRef(null);
  const editorRef = useRef(null);

  const [courseTitle, setCourseTitle] = useState('')
  const [coursePrice, setCoursePrice] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [image, setImage] = useState(null)
  const [chapters, setChapters] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [currentChapterId, setCurrentChapterId] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  const [lectureDetails, setLectureDetails] = useState(
    {
      lectureTitle: '',
      lectureDuration: '',
      lectureUrl: '',
      isPreviewFree: false,
    }
  )

  const handleChapter = (action, chapterId) => {
    if (action === 'add') {
      const title = prompt('Enter Chapter Name:');
      if (title) {
        const newChapter = {
          chapterId: uniqid(),
          chapterTitle: title,
          chapterContent: [],
          collapsed: false,
          chapterOrder: chapters.length > 0 ? chapters.slice(-1)[0].chapterOrder + 1 : 1,
        };
        setChapters([...chapters, newChapter]);
      }
    } else if (action === 'remove') {
      setChapters(chapters.filter((chapter) => chapter.chapterId !== chapterId));
    } else if (action === 'toggle') {
      setChapters(
        chapters.map((chapter) =>
          chapter.chapterId === chapterId ? { ...chapter, collapsed: !chapter.collapsed } : chapter
        )
      );
    }
  };

  const handleLecture = (action, chapterId, lectureIndex) => {
    if (action === 'add') {
      setCurrentChapterId(chapterId);
      setShowPopup(true);
    } else if (action === 'remove') {
      setChapters(
        chapters.map((chapter) => {
          if (chapter.chapterId === chapterId) {
            chapter.chapterContent.splice(lectureIndex, 1);
          }
          return chapter;
        })
      );
    }
  };

  const addLecture = () => {
    setChapters(
      chapters.map((chapter) => {
        if (chapter.chapterId === currentChapterId) {
          const newLecture = {
            ...lectureDetails,
            lectureOrder: chapter.chapterContent.length > 0 ? chapter.chapterContent.slice(-1)[0].lectureOrder + 1 : 1,
            lectureId: uniqid()
          };
          chapter.chapterContent.push(newLecture);
        }
        return chapter;
      })
    );
    setShowPopup(false);
    setLectureDetails({
      lectureTitle: '',
      lectureDuration: '',
      lectureUrl: '',
      isPreviewFree: false,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      if (!image) {
        return toast.error("Thumbnail Not Selected")
      }

      setIsAdding(true);

      const courseData = {
        courseTitle,
        courseDescription: quillRef.current.root.innerHTML,
        coursePrice: Number(coursePrice),
        discount: Number(discount),
        courseContent: chapters
      }

      const formData = new FormData()
      formData.append('courseData', JSON.stringify(courseData))
      formData.append('image', image)

      const token = await getToken()
      const { data } = await axios.post(`${serverUrl}/api/educator/add-course`, formData, { headers: { Authorization: `Bearer ${token}` } })

      if (data.success) {
        toast.success(data.message)
        setCourseTitle('')
        setCoursePrice(0)
        setDiscount(0)
        setImage(null)
        setChapters([])
        quillRef.current.root.innerHTML = ''
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    } finally {
      setIsAdding(false);
    }
  }

  useEffect(() => {
    // Initiate Quill only once
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
      });
    }
  }, []);

  return (
    <div className='min-h-screen overflow-y-auto flex flex-col items-start gap-8 md:p-10 p-6 w-full max-w-5xl mx-auto'>
      <div className="w-full">
        <h2 className="pb-6 text-2xl font-bold text-slate-900 tracking-tight">Add New Course</h2>

        <form onSubmit={handleSubmit} className='flex flex-col gap-6 w-full text-slate-700 bg-white p-8 border border-gray-200 rounded-2xl shadow-[0_2px_10px_rgb(0,0,0,0.02)]'>
          <div className='flex flex-col gap-2'>
            <label className='text-sm font-semibold'>Course Title</label>
            <input onChange={e => setCourseTitle(e.target.value)} value={courseTitle} type="text" placeholder='e.g. Advanced React Patterns' className='outline-none md:py-2.5 py-2 px-4 rounded-lg border border-gray-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-900 shadow-sm' required />
          </div>
          <div className='flex flex-col gap-2'>
            <label className='text-sm font-semibold'>Course Description</label>
            <div ref={editorRef} className='bg-slate-50 rounded-lg border border-gray-200 overflow-hidden'></div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='flex flex-col gap-2'>
              <label className='text-sm font-semibold'>Course Price (₹)</label>
              <input onChange={e => setCoursePrice(e.target.value)} value={coursePrice} type="number" placeholder='0' className='outline-none py-2.5 px-4 rounded-lg border border-gray-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-900 shadow-sm' required />
            </div>

            <div className='flex flex-col gap-2'>
              <label className='text-sm font-semibold'>Discount %</label>
              <input onChange={e => setDiscount(e.target.value)} value={discount} type="number" placeholder='0' className='outline-none py-2.5 px-4 rounded-lg border border-gray-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-900 shadow-sm' required />
            </div>

            <div className='flex flex-col gap-2 border-l border-gray-100 pl-6'>
              <label className='text-sm font-semibold'>Course Thumbnail</label>
              <label htmlFor="thumbnailImage" className='flex items-center gap-4 cursor-pointer group'>
                <div className="p-3 bg-indigo-50 rounded-xl border border-indigo-100 group-hover:bg-indigo-100 transition-colors">
                  <img src={assets.file_upload_icon} alt="" className="w-5 h-5 opacity-70" style={{ filter: 'brightness(0) saturate(100%) invert(32%) sepia(85%) saturate(1904%) hue-rotate(227deg) brightness(85%) contrast(93%)' }} />
                </div>
                <input type="file" id='thumbnailImage' onChange={e => setImage(e.target.files[0])} accept="image/*" className="hidden" />
                {image ? (
                  <img className='max-h-12 rounded bg-gray-100 object-cover border border-gray-200' src={URL.createObjectURL(image)} alt="Thumbnail Preview" />
                ) : (
                  <span className="text-sm text-slate-500 group-hover:text-indigo-600 transition-colors font-medium">Upload Image</span>
                )}
              </label>
            </div>
          </div>

          {/* Adding Chapters & Lectures */}
          <div className="pt-4 border-t border-gray-100 mt-2">
            <label className="text-sm font-semibold mb-4 block">Course Curriculum</label>

            <div className="space-y-4 mb-6">
              {chapters.map((chapter, chapterIndex) => (
                <div key={chapterIndex} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-center p-4 border-b border-gray-100 bg-slate-50/50">
                    <div className="flex items-center gap-3">
                      <img onClick={() => handleChapter('toggle', chapter.chapterId)} src={assets.dropdown_icon} width={14} alt="" className={`cursor-pointer transition-transform duration-200 ${chapter.collapsed && "-rotate-90"} opacity-60`} />
                      <span className="font-semibold text-slate-800 tracking-tight">Chapter {chapterIndex + 1}: {chapter.chapterTitle}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className='text-slate-500 text-sm font-medium'>{chapter.chapterContent.length} Lectures</span>
                      <button type="button" onClick={() => handleChapter('remove', chapter.chapterId)} className="p-1 hover:bg-red-50 rounded text-red-400 hover:text-red-500 transition-colors">
                        <svg xmlns="http://www.w3.org/-svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                    </div>
                  </div>

                  {!chapter.collapsed && (
                    <div className="p-5 text-sm">
                      {chapter.chapterContent.map((lecture, lectureIndex) => (
                        <div key={lectureIndex} className="flex justify-between items-center mb-3 py-2 border-b border-gray-50 last:border-0">
                          <div className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-xs font-semibold">{lectureIndex + 1}</span>
                            <span className="font-medium text-slate-800">{lecture.lectureTitle}</span>
                            <span className="text-slate-400 tabular-nums">{lecture.lectureDuration} mins</span>
                            {lecture.isPreviewFree && <span className="px-2 py-0.5 bg-green-50 text-green-600 rounded text-xs font-bold uppercase tracking-wider">Free Preview</span>}
                          </div>
                          <div className="flex items-center gap-4">
                            <a href={lecture.lectureUrl} target="_blank" className="text-indigo-600 hover:underline text-sm font-medium">Link</a>
                            <button type="button" className='text-red-400 hover:text-red-500 p-1' onClick={() => handleLecture('remove', chapter.chapterId, lectureIndex)}>
                              <svg xmlns="http://www.w3.org/-svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                          </div>
                        </div>
                      ))}
                      <button type="button" className="inline-flex items-center justify-center mt-3 text-sm font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-4 py-2 rounded-lg transition-colors cursor-pointer" onClick={() => handleLecture('add', chapter.chapterId)}>
                        + Add Lecture
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <button type="button" className="flex items-center justify-center font-medium bg-white border border-dashed border-gray-300 hover:border-indigo-400 text-slate-600 hover:text-indigo-600 w-full py-3 rounded-xl cursor-pointer transition-colors" onClick={() => handleChapter('add')}>
              + Add New Chapter
            </button>

            {showPopup && (
              <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50">
                <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
                  <h2 className="text-xl font-bold text-slate-900 mb-6 tracking-tight">Add Lecture</h2>

                  <div className="mb-4">
                    <label className="block text-slate-700 text-sm font-semibold mb-1.5">Lecture Title</label>
                    <input
                      type="text"
                      className="outline-none border-gray-200 border rounded-lg w-full py-2.5 px-4 text-slate-900 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
                      value={lectureDetails.lectureTitle}
                      onChange={(e) => setLectureDetails({ ...lectureDetails, lectureTitle: e.target.value })}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-slate-700 text-sm font-semibold mb-1.5">Duration (minutes)</label>
                    <input
                      type="number"
                      className="outline-none border-gray-200 border rounded-lg w-full py-2.5 px-4 text-slate-900 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
                      value={lectureDetails.lectureDuration}
                      onChange={(e) => setLectureDetails({ ...lectureDetails, lectureDuration: e.target.value })}
                    />
                  </div>

                  <div className="mb-5">
                    <label className="block text-slate-700 text-sm font-semibold mb-1.5">Lecture URL</label>
                    <input
                      type="text"
                      className="outline-none border-gray-200 border rounded-lg w-full py-2.5 px-4 text-slate-900 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
                      value={lectureDetails.lectureUrl}
                      onChange={(e) => setLectureDetails({ ...lectureDetails, lectureUrl: e.target.value })}
                    />
                  </div>

                  <div className="mb-6 flex items-center gap-3">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                      id="isPreviewFree"
                      checked={lectureDetails.isPreviewFree}
                      onChange={(e) => setLectureDetails({ ...lectureDetails, isPreviewFree: e.target.checked })}
                    />
                    <label htmlFor="isPreviewFree" className="text-slate-700 text-sm font-semibold cursor-pointer">Is Preview Free?</label>
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      className="flex-1 bg-white hover:bg-slate-50 border border-gray-200 text-slate-700 font-bold py-2.5 px-4 rounded-xl shadow-sm transition-colors text-sm cursor-pointer"
                      onClick={() => setShowPopup(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="flex-1 bg-indigo-600 hover:bg-indigo-700 border border-transparent text-white font-bold py-2.5 px-4 rounded-xl shadow-sm transition-colors text-sm cursor-pointer"
                      onClick={addLecture}
                    >
                      Add Lecture
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="pt-4 flex justify-end">
            <button disabled={isAdding} type="submit" className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 pr-8 pl-8 rounded-xl uppercase tracking-wider text-sm shadow-md transition-all duration-200 disabled:bg-slate-300 disabled:shadow-none disabled:cursor-not-allowed'>
              {isAdding ? 'Publishing Course...' : 'Publish Course'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddCourse