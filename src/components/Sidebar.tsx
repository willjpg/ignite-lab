import { useQuery } from "@apollo/client";
import { useGetQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";


interface SidebarProps {
    isOpen: boolean
  }
  


  export function Sidebar({ isOpen }: SidebarProps){
    const {data} = useGetQuery()


    return(
        <>
        <aside className={`${
            isOpen
              ? 'fixed right-0 lg:static lg:flex'
              : 'fixed -right-full lg:static lg:flex'
          } z-10 max-h-screen w-screen animate-slide flex-col overflow-y-scroll border-l border-gray-600 bg-gray-100 p-6 transition-all scrollbar-thin scrollbar-track-gray-600 scrollbar-thumb-green-400 md:w-[348px]`}>
            <span className="font-bold text-2xl pb-6 m-6 border-b border-gray-400 block">
                Cronograma de aulas
            </span>

            <div className="flex flex-col gap-8">
                {data?.lessons.map(lesson => {
                    return(
                        <Lesson 
                            key={lesson.id}
                            title={lesson.title}
                            slug={lesson.slug}
                            availableAt={new Date(lesson.availableAt)}
                            type={lesson.lessonType}
                />
                    )
                })}
                
            </div>

        </aside>
     </>
    )

}

function useGetLessonsQuery(): { data: any; } {
    throw new Error("Function not implemented.");
}
