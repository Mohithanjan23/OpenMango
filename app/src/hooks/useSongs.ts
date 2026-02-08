import { useQuery } from '@tanstack/react-query'
import { supabase } from '../supabaseClient'
import type { Song } from '@/components/SongRow'

export function useSongs() {
    return useQuery({
        queryKey: ['songs'],
        queryFn: async () => {
            const { data, error } = await supabase
                .from('songs')
                .select('*')
                .order('created_at', { ascending: false })

            if (error) {
                throw new Error(error.message)
            }

            return data as Song[]
        },
    })
}
